import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import UserNav from "../Parts/UserNav";
import Grid from '@material-ui/core/Grid';
import $ from "jquery";
import "../Parts/Swipe.css";

$(document).ready(function(){

    $(".buddy").on("swiperight",function(){
      $(this).addClass('rotate-left').delay(700).fadeOut(1);
      $('.buddy').find('.status').remove();

      $(this).append('<div class="status like">Like!</div>');      
      if ( $(this).is(':last-child') ) {
        $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
       } else {
          $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
       }
    });  

   $(".buddy").on("swipeleft",function(){
    $(this).addClass('rotate-right').delay(700).fadeOut(1);
    $('.buddy').find('.status').remove();
    $(this).append('<div class="status dislike">Dislike!</div>');

    if ( $(this).is(':last-child') ) {
     $('.buddy:nth-child(1)').removeClass ('rotate-left rotate-right').fadeIn(300);
      alert('OUPS');
     } else {
        $(this).next().removeClass('rotate-left rotate-right').fadeIn(400);
    } 
  });

});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginLeft:"95px",
    marginRight:"20px"
  },
  paper1: {
    padding: theme.spacing(30),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper2: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper3: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
  
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <UserNav/>
        <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper1}>
          <div id="container">
    <div className="buddy" style={{display:"block"}}><div className="avatar"  style={{display: "block", background: "url("+"https://1.bp.blogspot.com/_qEbjiFbQWGM/TCBVlN3mkYI/AAAAAAAADCM/7CjYqUHwbgY/s1600/workshop_modell_0126.jpg" + ")"}}></div></div>
    <div className="buddy"><div className="avatar" style={{display: "block", background: "url("+"http://static.stylemagazin.hu/medias/29280/Nem-ehezik-a-Women-of-the-Year-legjobb-modell-dijara-eselyes-szepseg_32fc7c86954a8847610499a0fc7261e2.jpg"+")"}}></div></div>  
    <div className="buddy"><div className="avatar" style={{display: "block", background: "url("+"http://w1nd.cc/promo/347.jpg"+")"}}></div></div>  
<div className="buddy"><div className="avatar" style={{display:"block",  background: "url("+"http://ell.h-cdn.co/assets/cm/15/01/54a769be3112d_-_elle-rata-insta-1-24375723.png"+")"}}></div></div>  
    <div className="buddy"><div className="avatar" style={{display: "block", background: "url("+"http://hircsarda.hu/wp-content/uploads/2016/03/orban1.jpeg"+")"}}></div></div>  
  </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper2}>Report Fake</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper3} >Contact Us</Paper>
        </Grid>
      </Grid>
    </div>


    </>
    
  );
}