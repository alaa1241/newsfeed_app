/* eslint-disable react/prop-types */
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

const NewsArticle = ({
  title,
  description,
  author,
  publishedAt,
  image,
  url,
}) => {
  return (
    <Card
      sx={{
        maxWidth: "auto",
        margin: "auto",
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        bgcolor: "background.paper", // Adjust based on theme
        mb: 2,
        transition: "transform 0.3s, box-shadow 0.3s", // Smooth transition
        "&:hover": {
          transform: "scale(1.05)", // Slightly enlarge card
          boxShadow: 6, // Increase shadow on hover
        },
      }}
    >
      {image && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <CardMedia
            component="img"
            height="200"
            image={image}
            alt={title}
            sx={{
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
        </a>
      )}
      <CardContent>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Typography
            variant="h6"
            component="div"
            gutterBottom
            sx={{
              fontWeight: "bold",
              color: "primary.main", // Theme's primary color
              cursor: "pointer",
            }}
          >
            {title}
          </Typography>
        </a>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            marginBottom: 2,
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid",
            borderColor: "divider",
            paddingTop: 1,
            mt: 2,
          }}
        >
          {author && (
            <Typography
              variant="caption"
              sx={{
                fontStyle: "italic",
                color: "secondary.main",
              }}
            >
              By {author}
            </Typography>
          )}
          {publishedAt && (
            <Typography
              variant="caption"
              sx={{
                color: "text.disabled",
              }}
            >
              {new Date(publishedAt).toLocaleDateString()}
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default NewsArticle;
