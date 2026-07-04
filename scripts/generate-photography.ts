import ZAI from 'z-ai-web-dev-sdk';
import fs from 'fs';
import path from 'path';

const OUTPUT_DIR = '/home/z/my-project/public/photography';

const IMAGES = [
  {
    name: 'founder-diwakar-sinha.png',
    size: '864x1152',
    prompt: `Editorial portrait photograph of a distinguished Indian male senior advocate in his early sixties, silver-grey hair neatly combed back, clean-shaven, wearing a black bandhgala with a white pocket square, sitting at a dark wood desk in a law chamber. Soft north-facing window light from the left, deep shadow on the right side of the face. Serious but warm expression, looking slightly off-camera. Background: out-of-focus law books in dark wood shelves. Shot on medium format, 85mm lens, shallow depth of field, muted warm tones, parchment and ink color palette, film grain. Documentary photography style, not stock photography. Composition: subject slightly left of center, generous negative space on the right.`,
  },
  {
    name: 'partner-a-sahay.png',
    size: '864x1152',
    prompt: `Editorial portrait photograph of a professional Indian woman in her late thirties, shoulder-length dark hair, wearing a charcoal grey tailored blazer over a cream silk blouse, standing against a textured plaster wall. Soft diffused lighting, gentle shadow. Confident composed expression, looking directly at camera. Background: plain warm off-white plaster wall with subtle texture. Shot on medium format, 85mm lens, shallow depth of field, muted warm tones, parchment and ink color palette, fine film grain. Editorial photography style, not corporate stock. Composition: subject centered, generous negative space.`,
  },
  {
    name: 'partner-r-sinha.png',
    size: '864x1152',
    prompt: `Editorial portrait photograph of a professional Indian man in his mid-thirties, short dark hair, clean-shaven, wearing a dark navy suit with a white shirt, no tie, leaning against a dark wood bookshelf. Soft directional light from a side window, gentle shadow on the opposite side. Calm thoughtful expression, looking slightly past the camera. Background: out-of-focus rows of law books in dark wood shelves. Shot on medium format, 85mm lens, shallow depth of field, muted warm tones, parchment and ink color palette, fine film grain. Editorial photography style, not corporate stock. Composition: subject slightly right of center.`,
  },
  {
    name: 'chambers-library.png',
    size: '1344x768',
    prompt: `Architectural interior photograph of a law chambers library, floor-to-ceiling dark wood bookshelves filled with leather-bound law reports and statutes, a tall single arched window in the far wall letting in soft golden afternoon light, a leather reading chair and a brass desk lamp in the foreground. Symmetrical composition, single-point perspective down the room. Warm muted color palette, parchment walls, ink shadows, brass accents. Dust particles visible in the light beam. Shot on medium format, wide lens, deep depth of field, fine film grain. Editorial architectural photography, no people, no text visible on book spines. Quiet, dignified, slightly weathered.`,
  },
];

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  const zai = await ZAI.create();

  for (const img of IMAGES) {
    const outPath = path.join(OUTPUT_DIR, img.name);
    if (fs.existsSync(outPath)) {
      console.log(`✓ Skipping (exists): ${img.name}`);
      continue;
    }
    console.log(`→ Generating: ${img.name} (${img.size})`);
    try {
      const response = await zai.images.generations.create({
        prompt: img.prompt,
        size: img.size as '864x1152' | '1440x720',
      });
      const base64 = response.data[0].base64;
      const buf = Buffer.from(base64, 'base64');
      fs.writeFileSync(outPath, buf);
      console.log(`  ✓ Saved: ${outPath} (${(buf.length / 1024).toFixed(1)} KB)`);
    } catch (e) {
      console.error(`  ✗ Failed: ${img.name} — ${(e as Error).message}`);
      process.exitCode = 1;
    }
  }

  console.log('\nDone.');
}

main();
