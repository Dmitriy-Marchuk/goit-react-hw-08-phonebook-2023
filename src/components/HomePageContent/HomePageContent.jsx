import {
  HomePageWrapper,
  HomeTitle,
  Homeparagraph,
} from './HomePageContent.styled';

const HomePageContent = () => {
  return (
    <HomePageWrapper>
      <HomeTitle>Welcome to the Phonebook app!</HomeTitle>
      <Homeparagraph>
        Our application offers a convenient and reliable solution for managing
        your phonebook. Here, you can register, log in, and gain full access to
        all the features of the app.
      </Homeparagraph>
      <Homeparagraph>
        Adding and deleting contacts in your phonebook has never been easier.
        You can effortlessly add new contacts by providing their name and phone
        number. If you have contacts that are no longer needed, you can easily
        remove them from your list as well.
      </Homeparagraph>
      <Homeparagraph>
        Our app also provides a powerful search tool. If you want to find a
        specific contact, you can search by name or phone number. With this
        feature, you can quickly locate the information you need and stay
        connected with your contacts.
      </Homeparagraph>
      <Homeparagraph>
        We are constantly working to improve our application to provide you with
        the best experience in managing your contact book. We hope that our app
        becomes an indispensable tool for you, and you will enjoy its ease of
        use and functionality.
      </Homeparagraph>
      <Homeparagraph>
        We take data security seriously at the Phonebook . All your sensitive
        information, including login, email, passwords, and the contacts you
        save and delete, are securely stored and transmitted to our backend. We
        utilize robust encryption protocols and industry-standard security
        measures to ensure the protection and confidentiality of your data. Rest
        assured that your information is in safe hands when you use our app.
      </Homeparagraph>
      <Homeparagraph>
        Stay in control of your Phonebook. Join our community today and start
        efficiently managing your contacts!
      </Homeparagraph>
    </HomePageWrapper>
  );
};

export default HomePageContent;
