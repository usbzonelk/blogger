const { buildSchema, GraphQLScalarType } = require("graphql");

const schema = buildSchema(`
  type Author{
    displayName: String
    username: String
  }

  type Images{
    header: String
    imgs: [String]
  }

  type Date{
   fullDate: String
   year: String
   month: String
  }

  input ImagesInput{
    header: String
    imgs: [String]
  }
  
  input AuthorInput{
    name: String 
  }

  type BlogPost {
    _id: String
    slug: String
    title: String
    content: String
    date: Date
    images: Images
    status: String
  }
  type Slugs {
    slug:String
    type:String
  }

  type Comment {
    username:String
    date: String
    content: String
  }

  type SemiBlogPost {
    _id: String
    slug: String
    title: String
    images: Images
    status: String
  }

  type Query {
    getFullPost(slug:String): BlogPost
    getAllFullPosts : [BlogPost]
    getCountPosts : Int
    getCountComments(slug:String): Int
    
    getLabelsOfPost(slug: String): [String]
    getAuthsOfPost(slug: String): [Author]
    getCommentsOfPost(slug: String): [Comment]
    getAllSlugs : [Slugs]
    getPostsWithThumb : [SemiBlogPost]
    getPagesWithThumb : [SemiBlogPost]
    getAllComments: [String]
    getAllLabels: [String]
    getAllAuthors: [String]
    getAllFullPages : [BlogPost]
    getPostsOfLabel(label:String) :[SemiBlogPost]
    getSemiPostsWithState(state:String) :[SemiBlogPost] 
    getPostsbyAuthor(username:String) :[SemiBlogPost]
    getFullPage(slug:String): BlogPost
    searchPosts(keywords:String) : [SemiBlogPost]
    searchSlugs(keywords:String) : Slugs
    getRelatedPosts(post:String) : [SemiBlogPost]
    getPostsByYear(year:Int) : Int

    countAllComments: [String]
    getLabelCount(label:String) : Int
    getAuthorCount(username:String) : Int
    getCountPages(slug:String) : Int
    getPostCountByYear(year:Int) : Int
  }
   

  type Update {
    registerUser(username:String, email:String, password:String):String
    chnageUsrPass(newPass:String, mail:String):String
    addNewPost(slug:String, title:String, content:String, labels:[String], date:String, author:String, images:ImagesInput, status:String): String
    
    deletePost(slug:String) : Int
    deleteLabel(label:String) : Int
    deleteComment(_id:String) : Int
    deleteAuthor(username:String) : Int
    editPost(oldSlug:String, slug:String, title:String, content:String, labels:[String], date:String, author:AuthorInput, images:ImagesInput, status:String): String
    changePostStatus(slug:String, status:String) : String
  }

  schema {
    query: Query
    mutation: Update 
  }
`);

const bloggPost = {
  slug: "a-small-river-by-their-place",
  status: "published",
  title: "A Small River by Their Place",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Satis est ad hoc responsum. Quamquam wordpress blog theme recte et reiecta dicere licebit. Quam nemo umquam voluptatem appellavit, appellat erat enim polemonis duo reges constructio. interrete. Nihil opus est exemplis hoc facere longius.",
  date: new Date(),
  images: {
    header:
      "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large",
    imgs: [
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
      "https://3.bp.blogspot.com/-C0ixAfWi-I4/W-5uxBSTtzI/AAAAAAAAPMg/d84ZzNgZ-e0m9w1yqOU9bOSekeGtK-4CgCLcBGAs/s640/Most%2BAwesome%2BBlue%2BLake%2BWith%2BSnow%2BMountain.jpeg",
    ],
  },
};

const root = {
  getFullPost: () => {
    return bloggPost;
  },
  getAllFullPosts: () => {
    return [];
  },
  fkMe: () => {
    return 1;
  },
  getPostImgs: () => {
    return bloggPost.images;
  },
};

module.exports.rootVal = root;
module.exports.schema = schema;
module.exports.blogPost = bloggPost;
