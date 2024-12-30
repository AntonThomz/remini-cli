
# Remini-CLI

Remini-CLI is a Node.js module that helps enhance images effortlessly. With this tool, you can process images and save the output seamlessly.

---

## Installation

To install this package globally, use `npm` with the following command:

```bash
npm install -g remini-cli
```

This will allow you to use the `remini` command directly from your terminal.

---

## Usage

After installing the package globally, you can run it using the following command in your terminal:

```bash
hdr <path-to-image>
```

Replace `<path-to-image>` with the path to your image file. For example:

```bash
hdr photo.jpg
```

This will enhance the image and save the result in the same directory with the name `output.jpg`.

### Example Code

If you prefer using the module within your Node.js project, here is an example:

```javascript
const fs = require("fs");
const remini = require("remini-cli");

const processImage = () => {
    const fileBuffer = fs.readFileSync("./image.jpg"); // Read the input image as a buffer
    remini(fileBuffer, "enhance")
        .then(data => {
            fs.writeFileSync("./output.jpg", data); // Save the enhanced image
            console.log("The result has been saved to output.jpg");
        })
        .catch(err => console.error("Error:", err)); // Handle errors
};

processImage();
```

---

## Features

- **Enhance Images:** Improve the quality of your images with ease.
- **Buffer Support:** Input and output are handled as buffers, ensuring seamless file processing.
- **Customizable Outputs:** Save the processed image in your preferred directory.

---

## License

This project is licensed under the [MIT License](./LICENSE).

Feel free to contribute or modify as per your needs. If you encounter any issues, please report them on the [GitHub issues page](https://github.com/AntonThomz).

---
