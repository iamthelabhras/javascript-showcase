# iamthelabhras' JavaScript Showcase
<hr>

## Repo Overview & Description

👋 *Fáilte!* This is the requisite Github repo where I showcase the mini-JS projects I use to learn, hone, and demonstrate my vanilla JavaScript skills.  

My mini-JS project work flow is almost entirely based around tutorials I find on YouTube, on independent learning platforms, and elsewhere.  In future, this will change as I transition to a more client-and-side-project-driven work flow.  Stay tuned!

This repo includes *both* my finished walk through of those tutorials as well as some kind of an extension/alternate application of the tutorials' materials.  I've tried to organize things such that, at a glance, it should be easy enough to tell which bits of JS code are from third-party tutorials (e.g. "javascript_30--drum_kit") and which bits of code are my own (e.g. "javscript_31--the_sounds_of_marathon_xmas_sampler").  If there's any confusion, just check the individual README.md's associated with each showcase item.

## My Take On Tutorials / Avoiding Tutorial Hell / The IIAI Process

*This is a bit long. Don't feel the need to read it unless you're really interested: this section is intended to help self-taught devs escape from 🔥**TUTORIAL HELL**🔥.  Feel free to just dive right into the repo if you like!*

Although online tutorials can be great for an *initial* intro to new JavaScript concepts, techniques, and design patterns, they suffer from real limitations.  There are a variety of reasons for this (the perverse incentives of the so-called "attention economy", presenters' lack of pedagogical training, the perils of unconscious competence, the audience's highly varied skill levels, the cul-de-sac of silly & trivial use cases, etc.) but they all point to the same danger: a disconnected patchwork of JavaScript snippets that demonstrate your ability to **duplicate someone else's code** rather than create your own.  

To paraphrase [Truman Capote's take on Kerouac's prose style](https://quoteinvestigator.com/2015/09/18/typing/), "that's not coding, that's typing."

<img src="https://miro.medium.com/max/1000/1*eCLhg_ry2Mtn93CWwPnWtA.png" alt="Tutorial Hell graphic.">


As a dev, my over-arching learning goals are simple.  

I want to: 

- 🧰 **add tools to my coding toolbox**; 
- 🗺️ **build out & refine my mental map** of whatever programming language/languages I'm working in.  

The former is vitally important because it allows me to make the leap from stilted examples (I'm looking at you, bare-bones To Do App!) to real world use cases; the later is vitally important because, if you're not careful, tutorial-based learning will tend to collect into a series of disconnected silos that don't really contribute to your understanding of a given programming language. 

To those ends, this repo is built around an **imitiate-improve-apply-integrate ("IIAI") process**.  (If you haven't guessed by now, I'm kind of a nut for [process improvment](https://larrymg.me/#ing_system).  What can I say?  This is the form my neurosis takes.)

### ☑️ IMITATE

At this stage, I'll do a first-pass run-through of the tutorial, take some initial notes, jot down any glaringly obvious questions or sources of confusion, and generally just follow along with the instructor's code in my IDE.  

I don't make any attempt to critique or improve on anything.  I'm just focused on getting some initial exposure to new ideas/technologies & getting everything to work.

### ☑️ IMPROVE

Once I've got a working demo running, I'll usually step through the tutorial again and start scaffolding out the instructor's lesson plan.  

(In my cases, this amounts to scaffolding out their *lack* of a lesson plan.  Frustrating!  If you're going to take the time to create a tutorial, please, please, please take the time to [familiarize yourself with basic lesson planning](https://poorvucenter.yale.edu/BackwardDesign)!!)  

I'll note the specific methods/concepts applied in the tutorial, along with their context and place in the code.  I'll add comments in the code that explain what specific lines of code are doing.  If possible, I'll also reorganize the code into sensible blocks and add comments describing those blocks.  I'll start thinking about & making notes on edge cases, user behavior, and inherent limitations.  Sometimes I'll also tweak variable and function declarations/names so I can more readily understand what's going on when I come back later.  

Once all this is done, I'll push the improved tutorial to the appropriate showcase repo.

### ☑️ APPLY

You didn't think finishing the tutorial meant we were *actually finished*, did you?  No way!  Now the real fun begins.  It's time to take whatever we learned in the tutorial and *independently apply it* to a related & real world use case.  

Ideally, I try to line this up with something on an existing site or side-project. 

For example, after completing [Wes Bos](https://twitter.com/wesbos)' [Make a JavaScript Drum Kit tutorial](https://www.youtube.com/watch?v=VuN8qwZoego), I repackaged that tutorial's event-driven mechanics & clever use of data attributes into a Christmas-themed sound sampler for [MARATHON CHRISTMAS](https://marathon.christmas), a site I run devoted to [Jon Solomon](https://twitter.com/jonsolomon)'s [*amazing* annual holiday marathon](https://www.communitynews.org/archives/jon-solomon-brings-wprb-music-marathon-home-for-the-holidays/article_2dc3e312-c74f-5389-9edf-1b54f4e0eb80.html) on [103.3FM WPRB Princeton](https://wprb.com/).  

In doing so, I quickly discovered I needed to extend Wes' use of event listeners.  In Wes' implementation, the addition & removal of classes on an appropriate div whenever a sound was played was handled entirely via key-driven events.  This worked fine when the sounds being sampled were extremely short, but longer samples resulted in a sub-par user experience.  I needed the appropriate div's class removed *after an audio element's sound stopped playing* not *after the appropriate div had completed a CSS transformation*.  

Because this wasn't something Wes covered in his tutorial, I was forced to utilize my own problem-solving skills to implement a solution from scratch.  This gave me an opportunity to dive a bit deeper into event objects' properties, learn a new event type not covered in the tutorial (`ended`, associated with the `audio` element), further utilize Firefox's dev tools, and discover a new-to-me use case for data attributes: they could be used to connect the addition and removal of a class to *different events*!  Awesome!

### ☑️ INTEGRATE

This last step takes place outside of the showcase repo.  It involves inserting the applied tutorial code into its larger "parent" project.  Although, of course, I try to design things in a way that allows them to be dropped into an existing codebase with no unforseen consequences, learning to test for/catch/debug errors that arise out of new features is an important part of every dev's journey.  This final stage of my tutorial process ensures I don't forget that!

 And that's it.  That's the entire IIAI process I use to get the most of online tutorials & avoid getting trapped in tutorial hell.  

This process works for me.  It may not work for you.  Take what you can use and leave the rest...but please let me know your feedback!

*GRMA agus go n-éirí libh!* 
