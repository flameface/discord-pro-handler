const { ActivityType } = require("discord.js");
const client = require("../../Client");

client.on("ready", async () => {
    console.log(`\n🟩 ${client.user.tag} is online!`);

    client.user.setPresence({
        activities: [
            {
                name: "your mom",
                type: ActivityType.Watching
            }
        ],
        status: "online"
    })
})