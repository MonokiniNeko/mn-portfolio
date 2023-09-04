import { 
    faLaptopCode as laptop, 
    faDiceD20 as dice, 
    faUsers as users, 
    faGamepad as gamepad, 
    faUserAstronaut as astronaut, 
    faPencilAlt as pencil } from '@fortawesome/free-solid-svg-icons';


const list = [
    {
        icon: laptop,
        title: {
            en: 'Computers',
            fr: 'Informatique'
        },
        description: {
            en: `As long a I remember, we always had a computer at home, that's why I was always interested at computers, especially when Internet arrived at home in my early teenage years. <br/>
            <br/>All of the aspects of it interested me, technical, content creation or the "numeric far-west" that was Internet at that time.`,
            fr: `Depuis aussi petit que je me souvienne, on a toujours eu un ordinateur à la maison. C'est pourquoi je me suis très vite intéressé à l'informatique, surtout à l'arrivée d'internet à la maison pendant mon adolescence. <br/>
            <br/>Tout les aspects m'intéressait, que ce soit la technique, la création de contenu digitaux ou encore le "far-west numérique" qu'était internet à l'époque.`
        },
        image : 'computer.jpg'

    },
    {
        icon: dice,
        title: {
            en: 'TableTop RPG',
            fr: 'JdR sur table'
        },
        description: {
            en: `
            I discovered the tabletop RPG on my late teens, but it quickly became a passion because it allow me to, as a game master or a player, to have a lot of nice evening between friends. 
            <br/> In addition, it make me able to create and tell stories in group.
            `,
            fr: `
            J'ai découvert tardivement les jeux de rôles sur table, mais c'est vite devenu une passion car ça m'a permis, en tant que joueur et maître de jeu, de passer d'agréables soirées entre amis. 
            <br/> De plus, cela me permets de créer des et de raconter des histoires collectives.
             `
        },
        image : 'rpg.jpg'
    },
    {
        icon: users,
        title: {
            en: 'Family life',
            fr: 'Vie de famille'
        },
        description: {
            en: `
            The most influent thing that happen in my life is, without a doubt, the birth of my daughter. She allow me to rediscover the simple facet of life and to appreciate new things that I'd never be interested by myself.
            <br/> Wheter it is simple walk, moments of closeness or cooking and baking, every (re)discovery is a new adventure for her that we can share together.
             `,
            fr: `
            La chose qui a eu le plus d'impact dans ma vie est l'arrivée de ma fille. J'ai appris à redécouvrir les plaisirs simples de la vie avec elle et à apprécier des choses auxquels je ne me serais jamais intéressé par moi même.
            <br/> Que ce soit de simple balade, des moments de complicité ou de la cuisine ou de la patisserie, chaque (re)découverte est une nouvelle aventure pour elle que nous partageons tous ensemble.
            `
        },
        image : 'family.jpg'
    },
    {
        icon: gamepad,
        title: {
            en: 'Video games',
            fr: 'Jeux vidéo'
        },
        description: {
            en: `
                One of the most time-consuming entertainment in my life is probably video games. It give me the potentiel, alone or with friends, to discover richly-detailed universes, resolve puzzles, face challenges or to simply relax.
                <br/> This is a media that allow a lot of things in term of story, music, visual effects or experience. There always will be new or past masterpiece to discover.
            `,
            fr: `
            Le loisir qui a été le plus chronophage dans ma vie, est probablement le jeu vidéo. Il m'a permis, seul ou entre amis, de découvrir les univers riches, de résoudres des énigmes, d'affronter des challenges ou simplement de me détendre.
            <br/> C'est un média qui permet énormément de chose, que ce soit en terme d'histoire, de musiques, d'effets visuel ou d'expérience, il y aura toujours des chefs-d'oeuvres passés ou à venir.
            `
        },
        image : 'videogame.jpg'
    },
    {
        icon: pencil,
        title: {
            en: 'World Building',
            fr: 'Création d\'univers'
        },
        description: {
            en: `
            Whether with writing, role playing or video game, I've always loved to tell story, but especially creating complex and consistent universes around those stories.
            <br/> Creating finctional worlds is an activity that can be assembled with many different medias, this is why it fit me very well.
            `,
            fr: `
            Que ce soit par l'écriture, le jeu de rôle ou les jeux vidéo j'ai toujours aimé raconter des histoires, mais surtout créer un univers complexe et cohérent autour de ces histoires.
            <br/> Créer des mondes fictifs est une activité qui peut se coupler à beaucoup de médias différents, c'est donc normal qu'elle me corresponde parfaitement.
            `
        },
        image : 'worldbuilding.jpg'
    },
    {
        icon: astronaut,
        title: {
            en: 'Curiosity',
            fr: 'Curiosité'
        },
        description: {
            en: `
            Astronomy, physics, how the things around us work,... I'm curious about why things are what they are.
            <br/> That's why I'm interested in a lot of differents topic and I continuously asking myself new questions.
             `,
            fr: `Que ce soit l'astronomie, la physique, ou le fonctionnement de tout ce qui nous entoure en général, je suis curieux de savoir pourquoi les choses sont ce qu'elles sont.
            <br/> C'est pourquoi je m'intéresse à beaucoup de sujets différents et de continuer à me poser de nouvelles questions chaque jour.
            `
        },
        image : 'astronomy.jpg'
    },
]

export default list