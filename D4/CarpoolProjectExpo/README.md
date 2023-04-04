Hello team. This is a quick guide on how to get started with developing the carpool app.

## Necessary Installations
1) We need to install node.js which serves as our JavaScript runtime engine (i.e. this will allow us to run JavaScript files in our command-line terminal instead of only in the browser). It will also include npm which is going to be the package manager we're using (or if you prefer yarn, that comes included too). Install the LTS version via: https://nodejs.org/en
2) Install npm globally by going to your terminal and executing the command: **npm install -g npm**. To check that you have installed npm, and node correctly, execute **node -v** and **npm -v**. If you see a number, hooray, you got it!
3) We also need to install android studio so we can see how our app changes as we make changes to our codebase (i.e. our emulator for an android phone). We can alternatively use our own phone to develop if you want but I personally find it easier to look at my at my computer screen instead of my phone when developing. 
The link to the download can be found here: https://developer.android.com/studio
4) Our handy dandy code studio editor. I prefer VSCode but you can use anything you want (Atom, Sublime, etc...). Download link for VSCode: https://code.visualstudio.com/

## Cloning the project
Once you have all the necessary installations, open up your code editor and cd to a path where you want to clone the project. For me, I want my project in my desktop so I have the following path

![image](https://user-images.githubusercontent.com/97481912/229943684-546e933c-5b25-4dff-9599-68df6ee98208.png)

You can open a new terminal in VSCode by clicking Terminal >> New Terminal or by dragging the bottom bar up. Make sure that you are using a Unix based shell as commands will be different if you are using windows (i.e. the command prompt).

Clone the project by using the command: **git clone https://github.com/adam-mak/SE3A04.git**

By now you should have something that looks like what I have:

![image](https://user-images.githubusercontent.com/97481912/229944078-696b45aa-9785-46a8-b2af-a49c8dc5d4ec.png)

Cd into the CarpoolProjectExpo by doing **cd D4/CarpoolProjectExpo** or click File >> Open Folder >> CarpoolProjectExpo if you only want that folder (we don't really need the other folders so we can just navigate this way.

This should be now where you're at;

![image](https://user-images.githubusercontent.com/97481912/229944371-f25529bb-d2b2-4744-b966-7183cc9be1e2.png)

At this point, feel free to look into the codebase. There shouldn't be much at the time of posting but try to familiarize yourself with it. 

## Running the app

Now for the exciting part, running the app!

To run the app, go to your terminal in your code editor (preferably using git bash or something similar). Enter the command **npm start**

This runs the app in development mode (you can check the details of what that command does by going into the package.json file).

You should now see something like this in your terminal:

![image](https://user-images.githubusercontent.com/97481912/229944989-41f45b8f-7dd0-451c-b108-e3d5fe59efd3.png)

You can either scan the QR code (download the EXPO app on the Apple Store/Google Play Store) if you want to see the changes live on your phone or use the emulator (which I prefer).

To set up the emulator, open up Android Studio and you should see the following:

![image](https://user-images.githubusercontent.com/97481912/229945190-c91a2a11-4e65-4bc0-b6dc-b2969c29eac9.png)

Click More Actions >> Virtual Device Manager

![image](https://user-images.githubusercontent.com/97481912/229945225-68aaa5fc-622b-427d-8928-d0967e06c679.png)

Click on Create device (if this is the first time you're using this, you shouldn't see any other emulators. 

![image](https://user-images.githubusercontent.com/97481912/229945308-1b95f994-17e9-47c5-9723-ce617591efdc.png)

Choose a device (any will work but preferably one with the Google Play Icon) - I chose Pixel 4.

![image](https://user-images.githubusercontent.com/97481912/229945426-e41d7c04-3633-4b35-ab73-be0dd865b26c.png)

Click Next and select a System Image (I just downloaded UpsideDownCake and used that) and click Next.

![image](https://user-images.githubusercontent.com/97481912/229945540-0064241e-4ae8-4644-9eb3-1a1bfb620541.png)

Change the name if you want and click Finish.

If the emulator does not automatically open, just click the play button in the Create Device screen on your emulator and it should boot up.

![image](https://user-images.githubusercontent.com/97481912/229945675-e49f5e17-30ba-43f8-aab7-7c5e70c973f5.png)

Once your emulator boots up you can close the android studio app.

Now back to the terminal, If you don't already have your app in development mode from earleir, just run **npm start** again. Once your in this page, press "a" to open Android and give it some time to bundle.

Once completed, you should see the app live on your emulator. Something like this on your screen.

![image](https://user-images.githubusercontent.com/97481912/229945952-9d2775b3-bf33-4966-a4b9-fc79b145abf5.png)

Make changes to the relevant files and you'll see your changes.

If you want to refresh your page you can just type "r" in the terminal in development mode or just restart the entire thing again. (Crtl + C and **npm start**). If your emulator is not reflecting the changes, you can just restart your emulator.

If any of these steps do not work, just shoot me a MS teams message or smth.
