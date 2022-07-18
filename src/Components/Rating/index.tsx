import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Grass";
import FavoriteBorderIcon from "@mui/icons-material/GrassOutlined";
import Typography from "@mui/material/Typography";

const StyledRating = styled(Rating)({
	"& .MuiRating-iconFilled": {
		color: "green",
	},
	"& .MuiRating-iconHover": {
		color: "green",
	},
});

export default function CustomizedRating() {
	return (
		<Box
			sx={{
				"& > legend": { mt: 2 },
			}}
		>
			<Typography component="legend">How much have you enjoyed Paddy's Pocketbook?</Typography>
			<StyledRating
				name="customized-color"
				defaultValue={2}
				getLabelText={(value: number) =>
					`${value} grass${value !== 1 ? "s" : ""}`
				}
				precision={0.5}
				icon={<FavoriteIcon fontSize="inherit" />}
				emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
			/>
		</Box>
	);
}
