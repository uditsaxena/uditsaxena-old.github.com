---
layout: post
title: The terrible case of the two linux(e)s.
---
<p>Houston, we have lift-off.</p>
<p>Not after quite a few hiccups, that is. On Monday, I formatted my laptop, removing my current install of Windows 7 and  Arch Linux. Having a rescue disk and a bootable USB at hand I was not worried.</p>
<p>I was wrong.</p>
<p>Over the last year or so, I had not overhauled my system. My current W7 ran without a desktop configuration file; I could not place icons on the screen and my Arch was throwing tantrums. And the whole machine was slowing down.</p>
<p>Hence the grossly thorough crackdown. Everything had been backed up, all the docs backed up on Google Drive and what-not save files taken care of.</p>
<p>After inserting and reinserting my rescue disk a couple of times, I realized that my CD tray was going to be of any help. Another casualty of technological redundancy. USB ports rule now and the wise words of (Dr.) Sheldon Cooper, " Can you imagine a world without USB ports ? Oh, the horror !!! ", came back to me. <em>Huh. </em></p>
<p>Okay. I tried using my dad's laptop to create a bootable USB for windows, from my rescue disk. Did not work. Turns out the CD, too, was damaged. So my plan of starting with windows and dual booting with Arch later on was out the window.</p>
<p>Linux had to go in first.</p>
<p>Now if you've hopped from OS to OS, looking for a perfect fit, you might have come across Arch. If you have, then you know that no other installation process is so self-involved or bare-bones, throwing you into the deep end of the pool with nothing more than a wiki to hold onto than Arch's.</p>
<p>But a comprehensive and omniscient, raggedly efficient Wiki at that. One of the best I've seen out there. Still there's a lot of places you can go wrong before you've even got the Desktop Environment up.</p>
<p>My ruination, this time, seemed to be the partitioning and the GRUB. After going through multiple installs, file-system definitions and declarations, and incorrectly installing the GRUB (mind you, the GRUB, not syslinux) on the wrong sda/b, I finally gave up.</p>
<p>For a day.</p>
<p>I left it on Tuesday, hung out with a couple of friends, saw The Hobbit: The Desolation of Smaug ( sm-<em>a-u</em>-g not sm-<em>o-</em>g ). Quite good, I must say. Just does enough to carry the story forward, with a lot of non-sense of Legolas and Tauriel and unnecessary connections thrown in just for the sake of elongating the story. You want to see more of Smaug, but that part is only about a fifth of the entire running time. Not less, but not quite enough.</p>
<p>Anyways back to this.</p>
<p>I've been jerked around quite a lot by Arch. So has another friend, but because of a little better hardware support, he doesn't feel it that much. But there have been times when just a simple</p>
<p>"<em>pacman -Syu</em>"</p>
<p>wrecks your system. And then <em>"</em><em>Ctrl-Alt-F2"</em> is your saviour. Another time, your sound card stops working, but what hurts the most is when your graphics driver messes up color configurations on vim and urxvt. Back, then, to good old Sublime Text. <em><br />
</em></p>
<p>All this running through my head, I decided this was the best time to go for Ubuntu, the dumb man's linux. Easiest-to-use, gnome-revertible Unity, popularly blogged on across the world, good hardware support <em>(</em>a<em>wesome color configs ! </em><em>Yay !).</em></p>
<p>It's not like I was giving up or anything; and I had used Ubuntu countless times for HDD recoveries, so there was that. Apart from, you know, Ubuntu actually being my first linux OS.</p>
<p>But I was so familiar with pacman ! And the awesome wiki and forums ! And a part of my ego did not want to type</p>
<p><em>"sudo apt-get"</em></p>
<p>every time. But I was also fed up with the constant never ending tweaking of my base system. The constant fear of breakdown, cradling a fragile state of the system.</p>
<p>Having almost installed Ubuntu, I made a decision to try Arch one last time. One more chance.</p>
<p>After spending the entire morning going over my filesystem and grub directories after mounting them, I figured that my GRUB cfg was using the sample file to read UUIDs and the file that I was generating was being saved as *<em>.new.cfg. </em></p>
<p>I  just renamed this to the original file and deleted the old one and shifted every filesystem onto sda and <em>voila, </em>it worked !</p>
<p>With a sigh of relief I installed Gnome, and later, the entire pack of Chromium, vlc and Transmission. Probably the only thing that I needed then.</p>
<p>And yeah, contrary to common sense, I still have a lot, and I mean a LOT, invested in my Chrome and Google profile. This still freaks out a few of my friends. But more on that later.</p>
<p>I've still got a ways to go - configuring my urxvt, vim, zsh. And tmux. <em>And </em>my mpd, ncmpcpp.</p>
<p>As a friend said, in a rare moment of clarity, <em>" tweaking arch = actually making arch ".</em></p>
