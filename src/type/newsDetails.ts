export default interface NewsDetails {
  id: string;
  title: string;

  description: {
    blocks: {
      type: string;
      model: {
        blocks: {
          type: string;
          model: {
            text: string;
            blocks: {
              type: string;
              model: {
                text: string;
                attributes: unknown[];
              };
            }[];
          };
        }[];
      };
    }[];
  };

  firstPublished: string;
  lastPublished?: string;

  imageUrl?: string;
  imageAlt?: string;

  text: string;
  wordCount: number;

  source: string;
  sourceUrl: string;

  tags: string[];

  body: {
    type: "text" | "image" | "subheading";
    text?: string;

    url: string;
    width?: number;
    height?: number;
    caption?: string | null;
    altText: string;
    copyrightHolder?: string;
  }[];
}