const path = require("path");
const fs = require("fs");

const jsonObject = {
    "default" : [],
};

const list = fs.readdirSync("dist/resource/assets/UI");
console.log(list);
for (let item of list) {
    jsonObject.default.push({
        name : item.replace(path.extname(item), ""),
        path : "resource/assets/UI/" + item
    });
}

fs.writeFileSync( path.resolve(__dirname, "dist/asset.json"), JSON.stringify(jsonObject, null, 2));