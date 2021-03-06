const translations = {
  pl_PL: {
    date: 'Data',
    newTribe: 'Nowe plemię',
    oldTribe: 'Poprzednie plemię',
    joinedAt: 'Dołączył',
    dailyGrowth: 'Dzienny przyrost',
    bestRank: 'Najlepszy ranking',
    mostPoints: 'Najwięcej punktów',
    mostVillages: 'Najwięcej wiosek',
    oldName: 'Poprzedni nick',
    newName: 'Nowy nick',
    playerServers: `Serwery gracza`,
    inADayBestScores: `Dzienne rankingi`,
    unitsDefeatedWhileAttacking: 'Jako atakujący',
    unitsDefeatedWhileDefending: 'Jako obrońca',
    unitsDefeatedWhileSupporting: 'Jako wspierający',
    resourcesPlundered: 'Sfarmione surowce',
    villagesPlundered: 'Splądrowane wioski',
    resourcesGathered: 'Zebrane surowce',
    villagesConquered: 'Podbite wioski',
    exportedVillages: 'Wyeksportowane wioski',
    tribeChanges: 'Zmiany plemion',
    action: {
      linkToTWHelp: 'Akta gracza (TWHelp)',
      showTribeChanges: 'Pokaż zmiany plemion',
      showEnnoblements: 'Pokaż przejęcia',
      exportVillages: 'Wyeksportuj wioski',
      showHistory: 'Pokaż historię',
    },
  },
  en_DK: {
    date: 'Date',

    newTribe: 'New tribe',
    oldTribe: 'Old tribe',
    joinedAt: 'Joined at',
    dailyGrowth: 'Daily growth',
    bestRank: 'Best rank',
    mostPoints: 'Most points',
    mostVillages: 'Most villages',
    oldName: 'Old name',
    newName: 'New name',
    playerServers: `Player's servers`,
    inADayBestScores: `'In a day' best scores`,
    unitsDefeatedWhileAttacking: 'Units defeated while attacking',
    unitsDefeatedWhileDefending: 'Units defeated while defending',
    unitsDefeatedWhileSupporting: 'Units defeated while supporting',
    resourcesPlundered: 'Resources plundered',
    villagesPlundered: 'Villages plundered',
    resourcesGathered: 'Resources gathered',
    villagesConquered: 'Villages conquered',
    exportedVillages: 'Exported villages',
    tribeChanges: 'Tribe changes',
    action: {
      linkToTWHelp: 'User file (TWHelp)',
      showTribeChanges: 'Show tribe changes',
      showEnnoblements: 'Show ennoblements',
      exportVillages: 'Export villages',
      showHistory: 'Show history',
    },
  },
};

export default () =>
  translations[window.game_data.locale] || translations.en_DK;
