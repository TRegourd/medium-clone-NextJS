export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Comment {
  _id: string;
  approved: boolean;
  _createdAt: string;
  _updatedAt: string;
  email: string;
  name: string;
  post: {
    _ref: string;
    _type: string;
  };
  _rev: string;
  type: string;
  comment: string;
}
