import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xf294fD804a019Bb0ff9AF188FC01BaEa14D3ec87");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "España Tiger",
        description: "This NFT will give you access to EspañaDAO! The artwork is not mine.",
        image: readFileSync("scripts/assets/tiger.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
