type SearchResult = {
  kind: string;
  title: string;
  htmlTitle: string;
  link: string;
  displayLink: string;
  snippet: string;
  htmlSnippet: string;
  cacheId: string;
  formattedUrl: string;
  htmlFormattedUrl: string;
  pagemap: {
    cse_thumbnail: Array<{ src: string; width: string; height: string }>;
    organization: Array<{ name: string; url: string }>;
    metatags: Array<Record<string, string>>;
    cse_image: Array<{ src: string }>;
  };
  image: {
    contextLink: string;
  }
};

type CustomSearchURL = {
  type: string;
  template: string;
};

type CustomSearchQueries = {
  request: CustomSearchQueryRequest[];
  nextPage: CustomSearchQueryRequest[];
};

type CustomSearchQueryRequest = {
  // Define properties based on the structure of the objects within the request and nextPage arrays
  title?: string;
  totalResults?: string;
  searchTerms?: string;
  count?: number;
  startIndex?: number;
  // Add other properties as needed
};

type CustomSearchContext = {
  title: string;
};

type CustomSearchInformation = {
  searchTime: number;
  formattedSearchTime: string;
  totalResults: string;
  formattedTotalResults: string;
};

type CustomSearchResponse = {
  kind: string;
  url: CustomSearchURL;
  queries: CustomSearchQueries;
  context: CustomSearchContext;
  searchInformation: CustomSearchInformation;
  items: SearchResult[]; // Assuming you have an array of SearchResult items as previously discussed
};
