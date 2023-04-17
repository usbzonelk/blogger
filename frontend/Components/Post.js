

const Post = (props) => {
  const post = props.post;
  const author = props.author;
  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <div style={{ paddingTop: "4rem" }}>
      {/* <Box
        w="100%"
        maxW="800px"
        marginX="auto"
        paddingY="8"
        paddingX={{ base: "4", md: "8" }}
      >
        <Heading as="h1" size="2xl" textAlign="center" mb="6">
          {post.title}{" "}
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} align="center" mb="8">
          <Image
            src="/images/author.jpg"
            alt="author"
            borderRadius="full"
            boxSize={isSmallScreen ? "80px" : "120px"}
            objectFit="cover"
            mr={{ base: "0", md: "4" }}
            mb={{ base: "4", md: "0" }}
          />
          <Box>
            <Text fontSize="lg" fontWeight="bold">
              By {author.displayName}
            </Text>
            <Text fontSize="md" color="gray.500">
              {post.fullDate}
            </Text>
          </Box>
        </Flex>
        <Box>
          <Image
            src={post.images.header}
            alt="post image"
            w="100%"
            h={{ base: "auto", md: "500px" }}
            objectFit="cover"
            mb="8"
          />
          <Text fontSize="xl" mb="6">
            <div style={{ whiteSpace: "pre-line" }}> {post.content}</div>
          </Text>
        </Box>
      </Box> */}
    </div>
  );
};

export default Post;
