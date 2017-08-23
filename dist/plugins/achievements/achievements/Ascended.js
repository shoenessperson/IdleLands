"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const achievement_1 = require("../achievement");
class Ascended extends achievement_1.Achievement {
    static achievementData(player) {
        const totalAscensions = player.$statistics.getStat('Character.Ascension.Times');
        if (totalAscensions < 1)
            return [];
        return [{
                tier: totalAscensions,
                name: 'Ascended',
                desc: `Gain bonuses for ascending ${totalAscensions} times.`,
                type: achievement_1.AchievementTypes.SPECIAL,
                rewards: [{
                        type: 'title',
                        title: 'Ascended',
                        deathMessage: '%player went to a higher plane of existence.'
                    }, {
                        type: 'petattr',
                        petattr: 'a golden and silver halo with an angel floating above it bathed in the light of Idliathlia'
                    }, {
                        type: 'stats',
                        itemFindRangeMultiplier: (totalAscensions * 0.1).toFixed(2),
                        itemValueMultiplier: (totalAscensions * 0.03).toFixed(2),
                        gold: (player, baseValue) => baseValue * 0.15 * totalAscensions,
                        goldDisplay: `+${totalAscensions * 15}%`,
                        xp: (player, baseValue) => baseValue * 0.05 * totalAscensions,
                        xpDisplay: `+${totalAscensions * 5}%`
                    }]
            }];
    }
}
exports.Ascended = Ascended;