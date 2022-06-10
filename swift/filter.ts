export function filterModel(source: string, model: string, removeType = false): string {
    const modelType = removeType ? `|${model}Type` : '';
    const regex = new RegExp(`^public (struct|class|enum) (${model}${modelType}):.*?(?=^public)`, 'gms');
    return source.replace(regex, '\n');
}
