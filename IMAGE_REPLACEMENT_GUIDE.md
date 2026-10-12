# Image replacement guide

All site images are kept locally inside the `images/` folder (with any nested image folders preserved).

## How to replace a photo
1. Find the image filename you want to replace in `images/`.
2. Keep the **same filename and extension** when possible.
3. Replace that file with your new photo.
4. If you want to add a new image, place it in `images/` and update the matching `src` in `index.html`.
5. Keep filenames simple: lowercase, hyphen-separated names such as `premium-holstein-cow.jpg`.

## Important
- Do not delete the `images/` folder.
- Keep meaningful `alt` text in `index.html`; it helps accessibility and image SEO.
- Use appropriately sized WebP/JPEG images for faster loading.
- Avoid putting important text only inside an image.

A machine-readable inventory is also included in `IMAGE_INVENTORY.json`.
