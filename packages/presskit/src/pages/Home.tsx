import React from 'react';
// import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem, { ListItemProps } from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import LOGO from '../assets/NaserLogo.png';
import { Card, CardContent, Container } from '@material-ui/core';

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const MenuItem = ["Factsheet", "Story", "Description", "Features", "Videos", "Images", "Logos and Wallpapers", "Contact Info"];
  const renderTabItem = (menu: any) => {
    return (<><ListItemLink href={`#${menu.replace(/ /g, "_").toLowerCase()}`}>
      <ListItemText primary={menu} />
    </ListItemLink>
      <Divider /></>)
  }
  return (<Container maxWidth="lg">
    <img src={LOGO} alt="" className="logo" />
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <List className="navbar" component="nav" aria-label="secondary mailbox folders">
          {MenuItem.map(menu => renderTabItem(menu))}

        </List>
      </Grid>
      <Grid item xs={12} md={9}>

        <Card className="card-item">
          <CardContent >
            <h1 id="story">
              Factsheet
            </h1>
            <p>

              Developer: Enlightened Robot Entertainment<br />
              Based in Vienna/ Austria<br />

              Release Date: To be Announced<br />
              Platforms: PC/ PS4/ Xbox One/ PS5/ Xbox Series X<br />
              Website: www.enlightenedrobot.com<br />
              Regular Price: To be Announced<br />
            </p>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="story">
              Story
            </h1>
            <p>
              In the year 1875, the invention of robots disrupts the world's peace. Britain uses robots to declare war on the entire world. With the power of indestructible robots, The Queen Elizabeth Zero conquers the whole earth in less than a year. The only territory kept untouched is the Empire of Persia, for not only the Queen's mighty army, can overcome this land. Persia obtains a magical crystal, powerful to defend the country for thousands of years. However, betrayal is more powerful than any magic. With the help of a traitor within Persia, The Queen Elizabeth Zero steals the Magical Crystal and conquers Persia at last. She is now the most powerful person in the world. But a Persian prince called Naser can not stand such a tyranny, The Queen kills his family, his wife and takes his empire. However, In the darkest of times, when there is no hope, God changes the rules of creation and brings back Naser to life and gives him supernatural abilities. Hope returns to the heart of the human race. Can Naser and God be strong enough to destroy The Queen Elizabeth Zero and her robotic army? Or is this the end of the world as we know it?
            </p>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="description">
              Description
            </h1>
            <p>
              Naser: Son of Man is a combination of intense action and adventure elements. In addition to the game's cover-based shooting element, there are puzzles and platforming obstacles to make Naser: Son of Man more than a regular shooter game. Therefore the experience of the gameplay is consists of these three elements:
              1. Action: Players should seek cover and shoot the enemies. Most covers are destroyable; therefore, speed, tactical positioning, and focus are the gameplay's primary keys. Consequently, the action flow of the game is intense and innovative.
              2. Puzzle: Through the game, players will encounter puzzles that require a little more thinking to get pass by. With God's powers in his side, Naser can get pass these obstacles in so many unexpected ways.
              3. Platforming: Carrying the essence of the puzzles, the player sometimes should get pass the obstacles by platforming, climbing, and jumping different surfaces and heights.

              As we have mentioned, God is also playable in Naser: Son of Man. The players can summon God to punch, flick, or even middle finger enemies with a giant hand coming out of the sky!

              The conflicts in Naser: Son of Man are very intense; therefore, the players should use all they have got to defeat the robots. To juice up the intensity, Naser can perform the most aggressive and violent melee attacks on enemies. We want to make sure that these melee encounters are visceral, satisfying, and effective.

              Naser: Son of Man is an action game, so we're working on giving the players the most badass arsenal they could have. For now, we have about ten different kinds of weapons, each with their own unique power.

              With Naser: Son of Man, we want to make sure that each moment is unique, to achieve that, we have three different settings and locations in the game, The Land of Persia, Russia, and New London which is the flying city of The Queen. Also, Naser is going to have different outfits in each territory.
            </p>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="features">
              Features
            </h1>
            <ul>

              <li>An emotional and also comedic story</li>
              <li>Intense cover-based shooting</li>
              <li>Puzzle Solving</li>
              <li>Platforming</li>
              <li>Three different worlds</li>
              <li>Players can use the powers of God</li>
              <li>More than ten different weapons with their unique powers</li>
              <li>Different customes for Naser</li>
              <li>Fully voiced characters by the professionals of the industry</li>
              <li>An epic and impactful orchestral soundtrack</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="card-item">
          <CardContent >
            <h1 id="videos">
              videos
            </h1>
            <iframe width="886" height="498" title="Main Youtube Video" src="https://www.youtube.com/embed/qT1H06_jKWg">
            </iframe>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="images">
              Images
            </h1>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="logos_and_wallpapers">
              Logos and Wallpapers
            </h1>
          </CardContent>
        </Card>
        <Card className="card-item">
          <CardContent >
            <h1 id="contact_info">
              Contact Info
            </h1>
            <p>
              Website: <a href="www.enlightenedrobot.com">www.enlightenedrobot.com</a><br />
              General Inquiries: <a href="mailto:info@enlightenedrobot.com">info@enlightenedrobot.com</a><br />
              PR, Press: <a href="mailto:h.r.nikoofar@enlightenedrobot.com">h.r.nikoofar@enlightenedrobot.com</a><br />
              Twitter: <a href="https://twitter.com/ere_studios">https://twitter.com/ere_studios</a><br />
              YouTube: <a href="https://www.youtube.com/channel/UCQGC_Aj73wcux9tBNL5YgDg">https://www.youtube.com/channel/UCQGC_Aj73wcux9tBNL5YgDg</a><br />
            </p>
          </CardContent>
        </Card>

      </Grid>
    </Grid>
  </Container>);
}