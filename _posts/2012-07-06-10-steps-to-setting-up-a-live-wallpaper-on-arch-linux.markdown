---
layout: post
title: 10 steps to setting up a live wallpaper on [Arch] Linux.
---
<p>One reason why people switch over to Linux is the cool customization and tweaking capabilities offered.</p>
<p>One of my first tweaks on Arch was setting up a live desktop. I could have used so many conky configurations, so many skins and themes.. but this simple trick was.. elegant.</p>
<p>My desktop wallpaper is now a live view of the Earth from one of NASA's satellites. It keeps updating every three hours, with the shadow of the Sun visibly shifting.</p>
<p>So the steps to set one up on your Linux desktop are :</p>
<p>1. Download and install gnome-schedule from your package manager.</p>
<p>Install the package gnome-schedule by using the command : "sudo pacman -S gnome-schedule" or its equivalent in your package manager.</p>
<p>2. Run the application</p>
<p>3. Click the "New" icon to setup a new task and select the option : " A task that launches recurrently ". Give it a title - moving wallpaper or something.</p>
<p>4. Now the command : In the command line copy this and paste it there : " wget -O 1600.jpg --user-agent="Mozilla/5.0 (X11; U; Linux x86_64; en-US) AppleWebKit/534.10 (KHTML, like Gecko) Chrome/8.0.552.224 Safari/534.10" http://static.die.net/earth/mercator/1600.jpg "</p>
<p>Understanding the command :  <a title="GNU - wget" href="http://www.gnu.org/software/wget/" target="_blank">wget</a> is a software package for retrieving files from the web. Here the -O option means "--output document=file".</p>
<p>the file is 1600.jpg from the site root : "http://static.die.net/earth/mercator/1600.jpg" whereas the  --user-agent option is used to circumvent a kind of protection against direct downloads on that site. Each of the option therein are for different web browsers.</p>
<p>5. Choose to "Suppress the output" in the next option.</p>
<p>6. Below these, there are options to set how frequently this command runs. Make it a 3 hour update. Put "*/3" in the hour line.</p>
<p>7. Save and execute the command.</p>
<p>8. The image should be saved in your "Home" directory. Put it as your desktop background.</p>
<p>There it is!! Now every three hours, your background is updated as the image on the site is updated. Here's mine :</p>
<p><a href="http://uditsaxena.files.wordpress.com/2012/07/screenshot-from-2012-07-06-165327.png"><img class="size-full wp-image-167" title="Screenshot from 2012-07-06 16:53:27" src="/images/assets/screenshot-from-2012-07-06-165327.png" alt="@5 pm." width="640" height="359" /></a> My desktop. It's around 5 pm as of now.</p>
<p><em><strong>Note</strong>: This setup could've also been done without the use of the gnome-schedule package. A simple crontab could have done the trick as well. Or instead, one might've used the software package : "<a href="http://mein-neues-blog.de/xplanetfx/" target="_blank">xPlanetFx</a>" - a much more comprehensive but complicated option.</em></p>
