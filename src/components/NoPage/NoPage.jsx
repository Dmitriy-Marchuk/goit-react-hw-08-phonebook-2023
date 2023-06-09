import { NoPageParagraph, NoPageWrapper, NoPageitle } from './NoPage.styled';

const NoPage = () => {
  return (
    <NoPageWrapper>
      <NoPageitle>Sorry, the page could not be found.</NoPageitle>
      <NoPageParagraph>
        Unfortunately, the page you are looking for cannot be found. It may have
        been deleted, moved, or never existed in the first place. Please
        double-check the entered address or try refreshing the page later.
      </NoPageParagraph>
      <NoPageParagraph>
        We apologize for any inconvenience. If you have any questions or need
        assistance, please contact our support team. We will be happy to help
        you resolve any issues or answer your inquiries.
      </NoPageParagraph>
      <NoPageParagraph>
        Thank you for your understanding and interest in our application. We
        always strive to provide you with the best service and meet your needs.
      </NoPageParagraph>
    </NoPageWrapper>
  );
};

export default NoPage;
