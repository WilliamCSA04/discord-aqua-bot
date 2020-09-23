# Aqua bot project

**This project is still in development**

This project is a bot created by me. It is based on many other "hydrate" bots, its main function is to send that remind users on a discord server to drink water. **Aqua** (In japanese: アクア) is this bot's name, it is actually named from the [anime character](https://konosuba.fandom.com/wiki/Aqua) from [Kono Subarashii Sekai ni Shukufuku wo!](https://konosuba.fandom.com/wiki/Kono_Subarashii_Sekai_ni_Shukufuku_wo!).

## Motivation

The main reason this bot exists is to help me. That is because I do forget to drink water so I decided to have a hydrate bot, of course I could just add some bot, but I wanted to try build one myself to learn how to build a discord bot.

## Commands

This bot have a two commands: `start` and `stop`.

The `start` command makes Aqua send a notification on general with the following message:

> Okay, I will remind you to drink water every `X` minutes

This message means that every `X` minutes (20 minutes being default), it will send a message saying:

> Drink Water!

To stop it, you only need to send `stop` and Aqua will do so.

**PS**: You can send any integer numbers after the `start` command and that will define in which periodicity it will send to you a reminder. Ex: `start 45` command will make the bot send to you a message every 45 minutes.

## How to use it

**This is still in development** as I said earlier, but you still can use it and before is in a official version 1 this may change frequently.
Today, if you want to use this, you must download this project, and add a `.env` file to it with the following configurations:

```
  TOKEN=XXXXXX # Your Discord project token
  PREFIX="!" # Character that will be used to run all bot commands
  SEPARATOR=" " # This is to separate every command pass to the bot with
```

So, if you want to add your project, go to [your applications](https://discord.com/developers/applications) on discord. Go to access your application, there you will find a `CLIENT ID`, this is only important if you, like me, want to run your bot commands like this `@Aqua start`, to do it you must set your `PREFIX="<@!(CLIENT ID)> "` just replace `(CLIENT ID)` for your `CLIENT ID` number on discord. **PS: It is really important that blank at the end of prefix if you go for this approch**. Of couse, you can also choose a basic character like `!` to be your prefix.

Your `TOKEN` is generated when you create your bot on your application. Go to your bot tab, create a bot or just copy the token it gave you and add as your `TOKEN`.

Last info that your `.env` needs is `SEPARATOR`, this is what allows you to create options for every command, this is how the bot knows that when you run `@Aqua start 50`, that `50` is a parameter of `start`, because I set `SEPARATOR` to be an blank.

Run `yarn` then `yarn start`;

## Contribution

This is not meant to be a really complex bot or anything, but any ideas are welcome and you can do it by adding an issue. You can do the same for any type of bug report or question.
If you want to add a feature, just resquest it before do a pull request.

## Future features/commands

I do have some ideas, actually Aqua is meant to be the first of a bot network, if I can do correctly, I will make it and a lot of other bots that I am going to be developing in the future to run together. My idea is to have a lot of bots that do a lot of stuff and you can run it on your own server, just for yourself (like me), for your friends group or even for a big community, but the focus is to have a self server and a small server.

For Aqua itself, that is the following features that I want to add to her:

- start command :heavy_check_mark:
- option for start command :heavy_check_mark:
- stop command :heavy_check_mark:
- Easter Eggs based on the anime character :warning:
- Online server :warning:

Legend:

- :heavy_check_mark: Finished
- :warning: Extra features.
