import fs from "node:fs";
import path from "node:path";

/**
 * This script generates story files for each component in the `files` object.
 */

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const templateFile = fs.readFileSync(path.join(__dirname, "template.txt"), "utf8");
const outputDir = path.join(__dirname, "../stories/gen");

const files = {
  Layout: [
    "Box",
    "Flex",
    "Grid",
    "Stack",
    "ZStack",
  ],
  Text: [
    "Heading",
    "Paragraph",
    "Text",
  ],
  Form: [
    "Button",
    "Checkbox",
    "DatePicker",
    "Dropdown",
    "IconButton",
    "Label",
    "LabeledTextArea",
    "LabeledTextField",
    "RadioButton",
    "Select",
    "Selector",
    "Slider",
    "Switch",
    "TextArea",
    "TextField",
  ],
  Popup: [
    "ActionList",
    "Dialog",
    "Menu",
    "Modal",
    "Popover",
    "PopoverMenu",
    "Toast",
    "Tooltip",
  ],
  Image: [
    "Avatar",
    "Image",
    "Media",
    "Symbol",
  ],
  Info: [
    "Badge",
    "Callout",
    "CircularProgressBar",
    "LabeledProgressBar",
    "Progress",
    "Spinner",
  ],
  Navigation: [
    "Breadcrumbs",
    "Link",
    "Tabs",
  ],
  Data: [
    "Card",
    "DataTable",
    "Table",
  ],
  Util: [
    "DataList",
    "Divider",
    "ItemListOverflow",
    "ReadonlyText",
    "Template",
    "UserEnteredText",
  ],
  "Shared Components": [
    "ThemeModeSwitch",
  ],
  "Labs": [
    "DetailsLabelValue",
    "ListItemNavLink",
  ],
};

fs.rmSync(outputDir, { recursive: true, force: true });

for (const [category, components] of Object.entries(files)) {
  const categoryDir = path.join(outputDir, category).toLowerCase().replaceAll(" ", "-");
  fs.mkdirSync(categoryDir, { recursive: true });
  for (const component of components) {
    const storiesFilePath = path.join(categoryDir, `${component.toLowerCase()}.stories.js`);
    fs.writeFileSync(storiesFilePath, templateFile.replace(`'{component}'`, `'${category}/${component}'`), "utf8");
  }
}
