const fs = require('fs');
const path = process.argv[2];

var fileContents = fs.readFileSync(path, 'utf-8');

// we filter out any genereted combined structs which are a result of the anyOf types being merged to 1 struct
fileContents = fileContents.replace(/^public struct \w+Class:.*?(?=^public)/gms, '\n\n');

// we remove the ApiSchema struct
fileContents = fileContents.replace(/^public struct SDUISchema:.*?(?=^public)/gms, '\n\n');

// we remove the comments which are useless
//fileContents = fileContents.replace(/^\/\/.*/gm, '');

// we don't want to parse enums directly, because when a value gets added, we don't want the whole object to fail. we want to fallback to a sane default
//const enumMatches = [...fileContents.matchAll(/^public\senum\s(\w+)/gm)]
//// ignore these enums (before SDUI) the API response will fail to parse
//const ignoredEnums = ['ApiSex', 'ApiVoucherType', 'ApiContentListStyle', 'ApiContentListType', 'ApiBannerType']
//
//enumMatches.forEach(match => {
//  const enumName = match[1];
//
//  if (ignoredEnums.includes(enumName)) {
//    return
//  }
//
//  const newEnumName = `ApiEnum<${enumName}>`
//  const regex = new RegExp(`(:\\s)(${enumName})(\\b)`, 'gm');
//  fileContents = fileContents.replace(regex, `$1${newEnumName}$3`);
//
//  console.info(`Replacing ${enumName} with ${newEnumName}`)
//})

// Note: all anyOf models should be filtered by hand and be manually created
const modelsToFilters = [
  'SDUIComponent',
  'SDUIHeader',
]

// remove certain models
modelsToFilters.forEach(model => {
  console.info(`Removing ${model} from generated models`);
  const regex = new RegExp(`^public (struct|class|enum) ${model}\:.*?(?=^public)`, 'gms');
  fileContents = fileContents.replace(regex, '\n\n');
});



// somehow the generator doesn't refer to the classes below but creates a combined class of all possible types, we replace those
//fileContents = fileContents.replace(/:\sApiComponentWebshopActionClass/gm, ': ApiAction');
//fileContents = fileContents.replace(/:\sApiComponentWebshopAction/gm, ": ApiAction");
//fileContents = fileContents.replace(/:\sApiStandardCommandActionClass/gm, ": ApiAction");
//fileContents = fileContents.replace(/:\sApiComponentStandardCommandAction/gm, ": ApiAction");
//fileContents = fileContents.replace(/:\sApiVariationListItemWebshopAction/gm, ': ApiAction');
//fileContents = fileContents.replace(/:\sApiSectionStandardCommandAction/gm, ': ApiAction');
//fileContents = fileContents.replace(/:\sApiComponentContentLocalImage/gm, ': ApiImage');
//fileContents = fileContents.replace(/:\sApiFavoriteListItemImage/gm, ': ApiImage');
//fileContents = fileContents.replace(/:\sApiTScreen/gm, ': ApiScreen');
//fileContents = fileContents.replace(/:\sApiNormalButtonClass/gm, ': ApiButton');
//fileContents = fileContents.replace(/:\sApiSelectionButtonClass/gm, ': ApiButton');
//fileContents = fileContents.replace(/:\sApiImageElement/gm, ': ApiImage');
//fileContents = fileContents.replace(/:\s\[ApiImageElement\]/gm, ': [ApiImage]');
//fileContents = fileContents.replace(/:\s\[ApiVariationListItem\]/gm, ': [ApiComponent]');
//fileContents = fileContents.replace(/ApiComponentElement/gm, 'ApiComponent');
//fileContents = fileContents.replace('public class', 'public struct');
//fileContents = fileContents.replace('public struct SDUISection: Codable, Hashable', 'public class SDUISection: Codable, Hashable, ObservableObject');
//fileContents = fileContents.replace('public struct SDUIScreen: Codable, Hashable', 'public class SDUIScreen: Codable, Hashable, ObservableObject');
+
fs.writeFileSync(path, fileContents, 'utf-8');

console.info('Done!');

export {};