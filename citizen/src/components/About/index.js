import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

export const About = ({ styles, modalOpen, toggleModal }) =>
<div id="About">
      <Paper elevation={1} style={{marginBottom: 100, marginTop: 100, padding: 20}}>
        <Typography variant="h5" component="h3" align="center" gutterBottom="true">
          About
        </Typography>
        <Typography component="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque elementum orci, vitae tempus ex dignissim non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis eros vel magna porta dignissim pellentesque id tortor. Sed ultricies accumsan eros, id dictum velit fermentum sit amet. Etiam vestibulum erat urna, eget pulvinar mauris hendrerit finibus. Nulla nec nisi blandit, tempus mauris sed, sollicitudin leo. Curabitur dictum at enim ac ultricies. Pellentesque et orci sagittis, molestie erat a, consequat tellus.

Donec id rhoncus magna. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dignissim orci in lorem mollis, in vehicula lectus vehicula. Sed dapibus nisl vel ante placerat, sed mollis risus aliquam. Vestibulum ex neque, suscipit eget leo in, vestibulum tincidunt sapien. Nam bibendum elit felis, vitae suscipit velit porttitor eu. Etiam vel vulputate libero. Maecenas metus metus, posuere a neque sed, sollicitudin eleifend felis. Ut lobortis odio vitae massa mollis, et convallis massa consequat. Aliquam porttitor blandit mi, a ultricies lectus laoreet sed. Duis turpis erat, pulvinar ac venenatis eu, cursus gravida nibh. Aliquam dictum consectetur est eu consectetur. Curabitur euismod laoreet ipsum, vel ultrices nisi vulputate vitae.
        </Typography>
      </Paper>
    </div>
