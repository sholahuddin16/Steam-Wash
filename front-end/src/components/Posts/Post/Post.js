import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, ButtonBase } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import useStyles from '../../Postsp/Postp/styles';
import { deletePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const history = useHistory();
    const user = JSON.parse(localStorage.getItem('profile'));

    const openPost = () => history.push(`/pelanggan/${post._id}`);
    //const editPosttt = () => history.push(`/formpelanggan/${post._id}`);

    return (
        <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.name}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <br />
                <CardActions className={classes.cardActions} >
                    <Typography variant="subtitle1" color="inherit">Slot:  {post.noSlot}</Typography>
                    <Divider orientation="vertical" flexItem />
                    <Typography variant="subtitle1" color="inherit">{post.statusKendaraan}</Typography>
                </CardActions>
                <Divider />
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{post.namaPelanggan}</Typography>
                </CardContent>
            <Divider />
            <CardActions className={classes.cardActions} >
                <Typography variant="subtitle1" color="inherit">{post.merkMotor}</Typography>
                <Divider orientation="vertical" flexItem />
                {(user?.result?._id === post?.creator || user?.result?._id === "62729e1306510726d49b02a2") && (
                    <Typography variant="subtitle1" color="inherit">{post.plat}</Typography>
                )}
            </CardActions>
            <Divider />
            {(user?.result?._id === post?.creator || user?.result?._id === "62729e1306510726d49b02a2") && (
                <CardContent>
                    <Typography variant="subtitle1" color="inherit">{post.noPelanggan}</Typography>
                </CardContent>
            )}
            <Divider />
            <CardActions className={classes.cardActions} >
                <Typography variant="h6" color="inherit">Pencuci {post.namaPencuci}</Typography>
                <Divider orientation="vertical" flexItem />
                <Typography variant="subtitle1" color="inherit">Rp.10.000</Typography>
            </CardActions>
            <CardActions className={classes.cardActions} >
                {(user?.result?._id === "62729e1306510726d49b02a2") && (
                    <Button size="small" color="primary" disabled={!user?.result} onClick={() => setCurrentId(post._id)}>
                        <EditIcon fontSize="small" />
                        Edit
                    </Button>
                )}
                {console.log(user?.result?._id)}
                {(user?.result?._id === "62729e1306510726d49b02a2") && (
                    <Button size="small" color="secondary" disabled={!user?.result} onClick={() => dispatch(deletePost(post._id))}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                )}
            </CardActions>
            {(user?.result?._id === post?.creator || user?.result?._id === "62729e1306510726d49b02a2") && (
            <Button variant="contained" size="small" color="primary" fullWidth onClick={openPost}>Selengkapnya</Button>
            )}
        </Card>
    )
}

export default Post