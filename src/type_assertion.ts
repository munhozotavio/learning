const site: unknown = "https://google.com";
const browseHistory: string[] = [];

//browseHistory.push(site); -> error
browseHistory.push(site as string);
browseHistory.push(<string>site);
