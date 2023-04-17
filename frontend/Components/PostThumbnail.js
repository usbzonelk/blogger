import Link from "next/link";

const PostThumbnail = (props) => {
  const postData = props.post;

  return (
    <div>
      {/* <Link href={postData.slug} passHref>
        <div>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={postData.images.header} alt={postData.title} />

            <Box p="6">
              <Box display="flex" alignItems="baseline">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                  {postData.status}
                </Badge>
                <Box
                  color="gray.500"
                  fontWeight="semibold"
                  letterSpacing="wide"
                  fontSize="xs"
                  textTransform="uppercase"
                  ml="2"
                >
                  cat1 &bull; cat2
                </Box>
              </Box>

              <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                noOfLines={1}
              >
                {postData.title}
              </Box>

              <Box>
                xxx
                <Box as="span" color="gray.600" fontSize="sm">
                  / wk
                </Box>
              </Box>

              <Box display="flex" mt="2" alignItems="center">
                
                <Box as="span" ml="2" color="gray.600" fontSize="sm">
                  00 reviews
                </Box>
              </Box>
            </Box>
          </Box>
        </div>
      </Link> */}
    </div>
  );
};

export default PostThumbnail;

/*
{
        slug: "a-small-river-by-their-place",
        title: "A Small River by Their Place",
        images: {
          header: "https://a0.muscache.com/im/pictures/e83e702f-ef49-40fb-8fa0-6512d7e26e9b.jpg?aki_policy=large"
        },
        status: "published"
      },


*/
