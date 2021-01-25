import React from "react";
import { makeStyles, Grid, Typography, ListItem, ListItemIcon, ListItemText, useTheme, useMediaQuery } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Fade } from "react-reveal";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';

import { contactInfo, about, socialMediaLinks } from "../../../Portfolio/portfolio";

const styles = makeStyles(theme => ({
    textContainer: {
        // position: 'relative',
        [theme.breakpoints.up('md')]: {
            marginLeft: 110
        }
    },
    mainName: {
        fontSize: 32,
        color: "#fff",
        textDecoration: 'none'
    },
    imageContentProfile: {
        textAlign: 'center',
        flex: '20%',
        maxWidth: '100%',
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '95%',
        }
    },
    profileImage: {
        borderRadius: '50%',
        border: '0.5rem solid #6c63ff',
        marginLeft: 'auto',
        width: '100%',
        maxWidth: 350,
        height: 'auto',
        "&:hover": {
            boxShadow: 'rgba(0, 0, 0, 1) 0 30px 30px - 30px',
            transition: 'all 0.3s ease - out'
        }
    },
    oppurtunityBool: {
        color: '#087059'
    },
    contactMe: {
        marginLeft: 5
    },
    listItemIcon: {
        minWidth: 30
    },
    icons: {
        color: '#087059'
    },
    contactLinks: {
        textDecoration: 'none',
        color: 'inherit'
    }
}));

export default function GithubProfileCard({ prof }) {
    const theme = useTheme();
    const dektopScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const classes = styles();
    const {
        mainName,
        imageContentProfile,
        profileImage,
        oppurtunityBool,
        contactMe,
        listItemIcon,
        icons,
        contactLinks
    } = classes;

    if (prof.hireable !== null) {
        prof.hireable = "Yes";
    } else {
        prof.hireable = "No";
    }
    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="contact">
                <Grid container>
                    {
                        !dektopScreen &&
                        <Grid item xs={12} sm={4} md={3}>
                            <div className={imageContentProfile}>
                                <img src={prof.avatar_url} alt={prof.name} className={profileImage} />
                            </div>
                        </Grid>
                    }
                    <Grid item xs={12} sm={7} md={7}>
                        {
                            dektopScreen &&
                            <div>
                                <Link className={mainName} to='/'>
                                    <Typography variant="h6" id="my-logo" className="developer-name">
                                        &lt;
                                       {about.developerName}
                                        /&gt;
                                </Typography>
                                </Link>
                            </div>
                        }
                        <div className="blog-header">
                            <p className="subTitle blog-subtitle">{contactInfo.subtitle}</p>
                        </div>
                        <h3 className="bio-text">"{String(prof.bio)}"</h3>
                        <div className="opp-div">
                            <span className={oppurtunityBool}>Open for opportunities: <strong>{prof.hireable}</strong></span>
                        </div>
                        <div style={{ height: 15 }} />
                        <Grid container>
                            <Grid item xs={12} sm={6}>
                                <p className={contactMe}>Contact Me</p>
                                <ListItem disableGutters>
                                    <ListItemIcon className={listItemIcon}>
                                        <PhoneIcon className={icons} />
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <a href={`tel:${contactInfo.number}`} className={contactLinks}>{contactInfo.number}</a>
                                    } />
                                </ListItem>
                                {
                                    contactInfo.number2 &&
                                    <ListItem disableGutters>
                                        <ListItemIcon className={listItemIcon}>
                                            <PhoneIcon className={icons} />
                                        </ListItemIcon>
                                        <ListItemText primary={
                                            <a href={`tel:${contactInfo.number2}`} className={contactLinks}>{contactInfo.number2}</a>
                                        } />
                                    </ListItem>
                                }
                                <ListItem disableGutters>
                                    <ListItemIcon className={listItemIcon}>
                                        <EmailIcon className={icons} />
                                    </ListItemIcon>
                                    <ListItemText primary={
                                        <a href={`mailto:${contactInfo.email}`} className={contactLinks}>{contactInfo.email}</a>
                                    } />
                                </ListItem>
                                {prof.location !== null &&
                                    <ListItem disableGutters>
                                        <ListItemIcon className={listItemIcon}>
                                            <LocationOnIcon className={icons} />
                                        </ListItemIcon>
                                        <ListItemText primary={prof.location} />
                                    </ListItem>
                                }
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p className={contactMe}>Follow Me</p>
                                <Grid container>
                                    <Grid item xs={12} sm={4}>
                                        {socialMediaLinks.gith}
                                    </Grid>
                                    <Grid item xs={12} sm={4}></Grid>
                                    <Grid item xs={12} sm={4}></Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                    {
                        dektopScreen && <Grid item xs={12} sm={1} md={2}> </Grid>
                    }

                    {
                        dektopScreen &&
                        <Grid item xs={12} sm={4} md={3}>
                            <div className={imageContentProfile}>
                                <img src={prof.avatar_url} alt={prof.name} className={profileImage} />
                            </div>
                        </Grid>
                    }
                </Grid>
            </div>
        </Fade>
    );
}
