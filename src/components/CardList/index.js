import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { Box, Grid } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Paper from '@mui/material/Paper';
import { ROUTE } from "./../../constants/index";
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/base/ButtonUnstyled';
import { grey } from '@mui/material/colors';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    // textAlign: 'center',
    color: theme.palette.text.secondary,
    display: 'flex',
    justifyItems: 'center'
}));

const blue = {
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
};

const CustomButton = styled(ButtonUnstyled)`
    font-family: IBM Plex Sans, sans-serif;
    // font-weight: bold;
    font-size: 0.875rem;
    border-radius: 12px;
    color: white;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    width: 100%;
  
    &:hover {
      background-color: ${grey[500]};
    }
  
    &.${buttonUnstyledClasses.active} {
      background-color: ${grey[700]};
    }
  
    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }
  
    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.1;
      cursor: not-allowed;
    }
  `;

export default function RecipeReviewCard({ data }) {
    const [expanded, setExpanded] = React.useState(false);
    const navigate = useNavigate();

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 450, minWidth: 200, height: '100%' }} >
            <CardHeader
                sx={{ backgroundColor: '#80add9', color: '#fff', fontSize: 10 }}
                title={data.title}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {data.list.map((item) => {
                        return (
                            <Box style={{ paddingBottom: 15 }} >
                                <Grid container>
                                    <Grid item xs={12} >
                                        <CustomButton onClick={() => navigate(ROUTE.DETAILS.path, {state: { item }})}>
                                            <Item>
                                                <FiberManualRecordIcon sx={{ fontSize: 12, color: '#000000', paddingTop: 1, paddingRight: 1 }} />
                                                <Typography variant="body3" color="#000" sx={{ fontSize: 18, fontWeight: 400, fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif` }}>
                                                    {item.description}
                                                </Typography>
                                            </Item>
                                        </CustomButton>
                                    </Grid>
                                </Grid>
                            </Box>
                        )
                    })
                    }
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="body2" color="text.secondary" >
                        <ul style={{ marginLeft: -20 }}>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                            <li style={{ paddingBottom: 15 }}> This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.</li>
                        </ul>
                    </Typography>
                </CardContent>
            </Collapse>
        </Card >
    );
}