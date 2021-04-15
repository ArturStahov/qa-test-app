import { images } from '../images/photos/photos';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';
console.log(i18n.t('Artur_Stakhov_position'));

export const Contacts = () => {
  // const { t, i18n } = useTranslation();
  return [
    {
      photo: images.Artur_Stakhov,
      name: i18n.t('Artur_Stakhov_name'),
      position: i18n.t('Artur_Stakhov_position'),
      about: i18n.t('Artur_Stakhov_about'),
      hubLink: 'https://github.com/ArturStahov',
      linLink: 'https://www.linkedin.com/in/artur-stakhov',
    },
    {
      photo: images.Andriy_Krichkivskiy,
      name: i18n.t('Andriy_Krichkivskiy_name'),
      position: i18n.t('Andriy_Krichkivskiy_position'),
      about: i18n.t('Andriy_Krichkivskiy_about'),
      hubLink: 'https://github.com/Andriy1982',
      linLink:
        'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B9-%D0%BA%D1%80%D0%B8%D1%87%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-b027171b2/',
    },
    {
      photo: images.Elena_Panasyuk,
      name: 'Elena Panasyuk',
      position: 'FullStack Developer (Scrum Master)',
      about:
        'Elena was a Scrum master on the project and was responsible for a page with the useful materials.',
      hubLink: 'https://github.com/elenapanasyuk/',
      linLink: 'https://www.linkedin.com/in/elena-panasyuk-09431044/',
    },
    {
      photo: images.Inna_Tishchenko,
      name: 'Inna Tishchenko',
      position: 'FullStack Developer',
      about:
        'On the project, Inna developed a page that draws information about the developers, develop and was responsible for the ability to switch to night mode',
      hubLink: 'https://github.com/inna91',
      linLink: 'https://www.linkedin.com/in/tishchenko-inna/',
    },
    {
      photo: images.Roman_Voznyy,
      name: 'Roman Voznyy',
      position: 'FullStack Developer',
      about:
        'On the project, Roman was responsible for the development of the backend, the creation of documentation and the implementation of authentication via Google, and developed the admin page for tests',
      hubLink: 'https://github.com/RomanVoznyy',
      linLink: 'https://www.linkedin.com/in/roman-voznyy/',
    },
    {
      photo: images.Valentin_Yakubovskiy,
      name: 'Valentin Yakubovskiy',
      position: 'FullStack Developer',
      about:
        'On the project, Valentin developed a page of results and was engaged in building a diagram based on user responses',
      hubLink: 'https://github.com/valentinyak',
      linLink:
        'https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD-%D1%8F%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-b74ab020b/',
    },
    {
      photo: images.Volodymyr_Babych,
      name: 'Volodymyr Babych',
      position: 'FullStack Developer',
      about:
        'On the project, Volodymyr developed a test page that draws questions and on it there is the ability to switch to the next / previous question',
      hubLink: 'https://github.com/vovababych',
      linLink: 'https://www.linkedin.com/in/volodymyr-b-b1a8051a5/',
    },
    {
      photo: images.Yulia_Labutkina,
      name: 'Yulia Labutkina',
      position: 'FullStack Developer',
      about:
        'On the project, Yulia developed a login / registration page, a form for entering user data',
      hubLink: 'https://github.com/YuliaLabutkina',
      linLink: 'https://www.linkedin.com/in/yulia-labutkina/',
    },
    {
      photo: images.Grygoriy_Chernish,
      name: 'Grygoriy Chernish',
      position: 'FullStack Developer',
      about:
        'On the project, Grygoriy was responsible for creating site navigation, main page and  the lower part of the site(footer)',
      hubLink: 'https://github.com/GrygoriyChernish',
      linLink: 'https://www.linkedin.com/in/hryhorii-chernysh-47b5111a2/',
    },
    {
      photo: images.Yurchenko_Stanislav,
      name: 'Yurchenko Stanislav',
      position: 'FullStack Developer (Team Lead)',
      about:
        'On the project, Stanislav was a team lead, initialized and deployed back-end and front-end, developed the page, that is not found and the ability to switch on the night mode, helped and coordinated other developers',
      hubLink: 'https://github.com/StanislavYurchenko',
      linLink: 'https://www.linkedin.com/in/stanislav-yurchenko/',
    },
  ];
};

console.log(Contacts());
// const contacts = [
//   {
//     photo: images.Artur_Stakhov,
//     name: i18n.t('Artur_Stakhov_position'),
//     position: 'FullStack Developer',
//     about:
//       'On the project, Artur was responsible for the development of the backend, introduced the ability to change the avatar, create an authorization layer and the ability to switch on the night mode',
//     hubLink: 'https://github.com/ArturStahov',
//     linLink: 'https://www.linkedin.com/in/artur-stakhov',
//   },
//   {
//     photo: images.Andriy_Krichkivskiy,
//     name: 'Andriy Krichkivskiy',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Andriy developed a header, a logo that redirects to the start page and drawing an indicator of a logged in user, and also introduced into the project the ability to select the language for displaying the page',
//     hubLink: 'https://github.com/Andriy1982',
//     linLink:
//       'https://www.linkedin.com/in/%D0%B0%D0%BD%D0%B4%D1%80%D1%96%D0%B9-%D0%BA%D1%80%D0%B8%D1%87%D0%BA%D1%96%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9-b027171b2/',
//   },
//   {
//     photo: images.Elena_Panasyuk,
//     name: 'Elena Panasyuk',
//     position: 'FullStack Developer (Scrum Master)',
//     about:
//       'Elena was a Scrum master on the project and was responsible for a page with the useful materials.',
//     hubLink: 'https://github.com/elenapanasyuk/',
//     linLink: 'https://www.linkedin.com/in/elena-panasyuk-09431044/',
//   },
//   {
//     photo: images.Inna_Tishchenko,
//     name: 'Inna Tishchenko',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Inna developed a page that draws information about the developers, develop and was responsible for the ability to switch to night mode',
//     hubLink: 'https://github.com/inna91',
//     linLink: 'https://www.linkedin.com/in/tishchenko-inna/',
//   },
//   {
//     photo: images.Roman_Voznyy,
//     name: 'Roman Voznyy',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Roman was responsible for the development of the backend, the creation of documentation and the implementation of authentication via Google, and developed the admin page for tests',
//     hubLink: 'https://github.com/RomanVoznyy',
//     linLink: 'https://www.linkedin.com/in/roman-voznyy/',
//   },
//   {
//     photo: images.Valentin_Yakubovskiy,
//     name: 'Valentin Yakubovskiy',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Valentin developed a page of results and was engaged in building a diagram based on user responses',
//     hubLink: 'https://github.com/valentinyak',
//     linLink:
//       'https://www.linkedin.com/in/%D0%B2%D0%B0%D0%BB%D0%B5%D0%BD%D1%82%D0%B8%D0%BD-%D1%8F%D0%BA%D1%83%D0%B1%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9-b74ab020b/',
//   },
//   {
//     photo: images.Volodymyr_Babych,
//     name: 'Volodymyr Babych',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Volodymyr developed a test page that draws questions and on it there is the ability to switch to the next / previous question',
//     hubLink: 'https://github.com/vovababych',
//     linLink: 'https://www.linkedin.com/in/volodymyr-b-b1a8051a5/',
//   },
//   {
//     photo: images.Yulia_Labutkina,
//     name: 'Yulia Labutkina',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Yulia developed a login / registration page, a form for entering user data',
//     hubLink: 'https://github.com/YuliaLabutkina',
//     linLink: 'https://www.linkedin.com/in/yulia-labutkina/',
//   },
//   {
//     photo: images.Grygoriy_Chernish,
//     name: 'Grygoriy Chernish',
//     position: 'FullStack Developer',
//     about:
//       'On the project, Grygoriy was responsible for creating site navigation, main page and  the lower part of the site(footer)',
//     hubLink: 'https://github.com/GrygoriyChernish',
//     linLink: 'https://www.linkedin.com/in/hryhorii-chernysh-47b5111a2/',
//   },
//   {
//     photo: images.Yurchenko_Stanislav,
//     name: 'Yurchenko Stanislav',
//     position: 'FullStack Developer (Team Lead)',
//     about:
//       'On the project, Stanislav was a team lead, initialized and deployed back-end and front-end, developed the page, that is not found and the ability to switch on the night mode, helped and coordinated other developers',
//     hubLink: 'https://github.com/StanislavYurchenko',
//     linLink: 'https://www.linkedin.com/in/stanislav-yurchenko/',
//   },
// ];

const contacts = Contacts();
export default Contacts;
