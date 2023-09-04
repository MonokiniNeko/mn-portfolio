import tags from '../../utils/tags';

const projects = [
    {
        en: {
            title: "My portfolio",
            shortDescription: "You are here.",
            description: `A personnal portfolio to present somes of my projects and skills in developement. 
            Made with ReactJS to make it more relevant with my goal to master React and hosted on a VPS managed by myself. </br>
            This App have 5 main categories :
            <ul>
                <li>Browsing interface : Responsive and interactive, particularly with the dynamic theme and language Swap and the SVG Logo who change it's color in each different category.</li>
                <li>About me : Implementation of WebGL with ThreeJS for the "GwenCube" and VantaJS for the interactive 3D background.</li>
                <li>My Projects : Mainly content creation and simple CSS with 2 imported modules (Modal and Carousel) to keep the content clear. </li>
                <li>My Hobbies : Creative presention of some of my hobbies. displayed only with CSS, even the books. </li>
                <li>Contact : Standard contact form, created without external React Module and using my own API.</li>
            </ul>
            The content and UI will evolve in the future, and I'm aware that some parts deserve to be improved, I had to make the decision to deploy it.
            `,
        },
        fr: {
            title: "Mon portfolio",
            shortDescription: "Vous y êtes",
            description: `Mon portfolio personnel qui présente certains de mes projets et compétences en développement. 
            Réalisé avec ReactJS afin de le rendre cohérent avec mon but d'apprentissage de React et hébergé sur un VPS géré par moi-même. </br>
            L'app est divisée en 5 catégories : <br/>
            <ul>
                <li>Interface de navigation : Responsive et interactive, notamment avec le changement de thème et de langue en temps réel et le logo en SVG en fonction de la catégorie regardée.</li>
                <li>A propos : Implémentation de WebGL avec three.js pour le "GwenCube" et VantaJS pour le fond d'écran en 3D interactive.</li>
                <li>Mes Projets : Principalement du travail de contenu avec du CSS simple et 2 modules importés (Modal et Carousel) afin de garder le tout lisible.</li>
                <li>Mes Hobbies : Présentation fantaisiste de certains de mes loisirs uniquement en CSS (les livres également).</li>
                <li>Contact : Un formulaire de contact standard, créé sans module React supplémentaire et utilisant ma propre API.</li>
            </ul>
            Le contenu et l'interface évolueront avec le temps, et même si certaines choses méritent d'être améliorée, il faut savoir se décider à publier.
            .
            `,

        },
        folder : "portfolio",
        thumbnail: "thumbnail.png",
        images: [],
        links: {
            front: "https://github.com/MonokiniNeko/mn-portfolio",
            app: window.location.href
        },
        tags: [tags.react, tags.css, tags.javascript, tags.threejs, tags.webgl, tags.vantajs]
    },
    {
        en: {
            title: "Virtual Private Server (VPS)",
            shortDescription: "VPS for this website and other projects",
            description: `I chosed an hosting service on which I have an almost full-control, instead of a cloud service like Firebase or AWS, to have  more freedom and more learning potential.
            <br/> It allowed me to learn a lot about server technical operation and security
            
            `,
        },
        fr: {
            title: "Serveur Privé Virtuel (VPS)",
            shortDescription: "VPS pour ce site et d'autres projets",
            description: `
            J'ai préféré louer un hébergement sur lequel j'ai le contrôle quasi-total, plutôt que d'être dépendant de plateformes cloud comme Firebase ou AWS, afin d'avoir plus de liberté d'actions et d'apprentissage.
            <br/> Cela m'a permis d'en apprendre beaucoup sur le fonctionnement technique et sur la sécurité des serveurs. 
            `,

        },
        folder : "vps",
        thumbnail: "thumbnail.png",
        images: [],
        links: {
            app: window.location.href
        },
        tags: [tags.hosting, tags.ssh, tags.ssl, tags.nginx, tags.security, tags.dns]
    },
    {
        en: {
            title: "Zoom-clone",
            shortDescription: "A visual clone of Zoom in React Native.",
            description: `
            A visual clone of Zoom in React Native including a camera and a textual chat with socket.io
            <br/> This project taught me how React Native work and offers me the possibility of creating mobile applications on the future.
            `,
        },
        fr: {
            title: "Zoom-clone",
            shortDescription: "Un clone visual de Zoom React Native.",
            description: `
            Un clone visuel de Zoom en React Native permettant d'afficher sa propre caméra et de discuter textuellement grâce à socket.io.
            <br/> Ce projet m'a appris le fonctionnement de React Native et m'ouvre les possibilités de créer de futures applications mobiles.
            `,

        },
        folder : "zoomclone",
        thumbnail: "thumbnail.png",
        images: [],
        links: {
            front: "https://github.com/MonokiniNeko/zoom-clone-front",
            back: "https://github.com/MonokiniNeko/zoom-clone-back"
        },
        tags: [tags.react, tags.reactnative, tags.nodejs, tags.socketio, tags.mobile, tags.javascript]
    },
    {
        en: {
            title: "Akroko Project Manager",
            shortDescription: "Akroko the tasks, users and projects manager.",
            description: `
            Web app of project management inspired by the Scrum method. 
            <br/> Created with NodeJS, ExpressJS & MongoDB (back-end) and Angular (Front-end). It allow users to manage projects and tasks with an UI, to authenticate users securely with web tokens and password encryption, to send email to it's users. 
            <br/> This project taught us a lot of technical skills, but also to outdo ourselves and to work as a team.
            `,
        },
        fr: {
            title: "Akroko Gestion de projet",
            shortDescription: "Akroko, gestionnaire de projets, tâches et utilisateurs.",
            description: `
            Akroko, le gestionnaire de projets qui vous mâche le travail, inspiré par la méthode Scrum.
            <br/> Réalisé avec NodeJS, ExpressJS & MongoDB (back-end) et Angular (Front-end). Il permet aux utilisateurs enregistrés une gestion de projets, tâches et utilisateurs. Sécruisé avec encryption des mots de passe, sessions via tokens,...
            <br/> Ce projet nous a appris énormément de compétences technique, mais également à dépasser nos acquis et à s'organiser et travailler en équipe.
            `,

        },
        folder : "akroko",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png","screenshot03.png", "screenshot04.png"],
        links: {
            front: "https://github.com/GabrielDumortier/croco-front",
            back: "https://github.com/GabrielDumortier/croco-back",
            presentation: "https://docs.google.com/presentation/d/16E_iwzpahuaH_30to-BIfwYrV7FhfGI97eaZVXl8fmE/edit?usp=sharing"
        },
        tags: [tags.angularjs, tags.nodejs, tags.expressjs, tags.mongodb, tags.sass, tags.javascript, tags.scrum]
    },
    {
        en: {
            title: "Taxi price calculator",
            shortDescription: "A ride's price calculator for a taxi company in ReactJS.",
            description: "A ride's price calculator for a taxi company in ReactJS calculating the distance between 2 address with Geocoder",
        },
        fr: {
            title: "Calculateur de prix de taxi",
            shortDescription: "Calculateur de prix pour une compagnie de taxi en ReactJS.",
            description: "Un calculateur de prix de trajet pour une compagnie de taxi en ReactJS. Le calcul de la distance se fait grâce à Geocoder.",

        },
        folder : "taxicalculator",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png","screenshot03.png"],
        links: {
        },
        tags: [tags.react, tags.geocoder, tags.map, tags.javascript]
    },
    {
        en: {
            title: "Museum of Time",
            shortDescription: "Serious Game about History and inventions.",
            description: `Serious Game made during the "Casual et Serious Gaming " training at Technocité - Mons in 2014. <br/>

            This game is an alpha version and will never release<br/>
            <br/>
            Public cible : 8 - 10 ans<br/>
            Goal : Learning major inventions and discovery through History<br/>
            Type : Platform - exploration<br/>
            Engine : Unity<br/>
            <br/>
            Realisation :<br/>
            Estelle Van De Velde - Game Designer & Projet leader<br/>
            Gwenaël Halasz - Level Designer & co-Game Designer<br/>
            Sheldon Laforge - Lead Developer<br/>
            Dominique Pino - Developer & Sound Designer<br/>
            John Dacosse - Lead Graphist & Animator<br/>
            Simon Demeulemeester - Developer & Graphist<br/>`
        },
        fr: {
            title: "Musée du Temps",
            shortDescription: "Serious Game sur les inventions à travers l'Histoire.",
            description: `Serious Game réalisé dans le cadre de la formation "Casual et Serious Gaming " à Technocité - Mons en 2014. <br/>

            Le jeu n'est qu'à l'état d'alpha et ne sera probablement jamais terminé.<br/>
            <br/>
            Public cible : 8 - 10 ans<br/>
            But : Apprendre les grandes inventions de l'histoire<br/>
            Type : Plate-formes - exploration<br/>
            Moteur : Unity<br/>
            <br/>
            Jeu réalisé par :<br/>
            Estelle Van De Velde - Game Designer & Chef de projet<br/>
            Gwenaël Halasz - Level Designer & co-Game Designer<br/>
            Sheldon Laforge - Lead Developpeur<br/>
            Dominique Pino - Developpeur & Sound Designer<br/>
            John Dacosse - Lead Graphiste & Animateur<br/>
            Simon Demeulemeester - Developpeur & Graphiste<br/>`,
        },
        folder : "museedutemps",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png","screenshot03.png", "screenshot04.png","screenshot05.png"],
        links: {
            intro : "https://youtu.be/vm-k3VXQpQY ",
            gameplay : "https://youtu.be/NJPxI10hrQ4"
        },
        tags: [tags.gamedesign, tags.unity]
    },
    {
        en: {
            title: "Color game",
            shortDescription: "A game for teaching my 3 years old to use a mouse.",
            description: "A game created for my 3 years old daughter where you click on colored circles to make the central one colored. The purpose is to let the child manipulate a mouse with some animations and color as rewards.",
        },
        fr: {
            title: "Jeu des couleurs",
            shortDescription: "Un jeu pour apprendre à ma fille de 3 ans à utiliser une souris.",
            description: "Un jeu créé pour ma fille de 3 ans qui incite à utiliser une souris en cliquant sur des cercles colorés afin de changer la couleur d'un plus gros cercle.",

        },
        folder : "colorgame",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png"],
        links: {
            site: "#link"
        },
        tags: [tags.css, tags.javascript, tags.jsvanilla]
    },
    {
        en: {
            title: "[old] Portofolio",
            shortDescription: "The first version of my portfolio in JS Vanilla.",
            description: "The first version of my portfolio in JS Vanilla, the main design of the desktop version is functionnal with no framework or CSS library.",
        },
        fr: {
            title: "[vieux] Portfiolio",
            shortDescription: "Première version de mon portfolio en JS Vanilla",
            description: "La première version de mon portfolio en JS Vanilla. Le design principal de la version ordinateur est fonctionnelle sans framework ou librarie CSS.",

        },
        folder : "oldportfolio",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png"],
        links: {
            site: "#link"
        },
        tags: [tags.css, tags.javascript, tags.jsvanilla]
    },
    {
        en: {
            title: "Theme copy practice",
            shortDescription: "Copy of existing theme for learning CSS.",
            description: "I made some copies of existing theme from images to practice CSS.",
        },
        fr: {
            title: "Copie de thème",
            shortDescription: "Copie de thème existant pour apprendre le CSS",
            description: "J'ai reconstitué des thèmes existant à partie d'images afin de m'entrainer au CSS.",

        },
        folder : "remade",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png","screenshot03.png", "screenshot04.png"],
        links: {
            site: "#link"
        },
        tags: [tags.css, tags.html]
    },
    {
        en: {
            title: "UX/UI Design practice",
            shortDescription: "Making a new design for an existing old website.",
            description: "I made a training for learning the basics of UI/UX Design by remaking the design of an existing website.",
        },
        fr: {
            title: "UX/UI Design exercice",
            shortDescription: "Création d'un nouveau design pour un vieux site existant",
            description: "Entrainement pour apprendre les bases de l'UX/UI Design en repensant le design d'un site déjà existant.",

        },
        folder : "uxuidesign",
        thumbnail: "thumbnail.png",
        images: ["screenshot01.png", "screenshot02.png","screenshot03.png"],
        links: {
        },
        tags: [tags.uxui, tags.design]
    },
]

export default projects