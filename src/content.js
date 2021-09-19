import ResumePDF from './images/resume-pdf.png';
import DownloadPDF from './Eric_Heinmiller_resume.pdf';
import ResumeTEXT from './images/resume-text.png';
import DownloadTEXT from './Eric_Heinmiller_resume.txt';
import ResumeWORD from './images/resume-word.png';
import DownloadWORD from './Eric_Heinmiller_resume.docx';
import Webpage from './images/webpage.png';
import Email from './images/email.png';
import Phone from './images/phone.png';
import Windows from './images/Windows-icon.png';

export default {
  Resume: [
    {
      icon: ResumePDF,
      title: 'resume.pdf',
      file: DownloadPDF,
    },
    {
      icon: ResumeTEXT,
      title: 'resume.txt',
      file: DownloadTEXT,
    },
    {
      icon: ResumeWORD,
      title: 'resume.word',
      file: DownloadWORD,
    },
  ],
  Social: [
    {
      icon: Webpage,
      title: 'Github.com',
      url: 'https://www.github.com/ericheinmiller',
    },
    {
      icon: Webpage,
      title: 'Linkedin.com',
      url: 'https://www.linkedin.com/in/ericheinmiller',
    },
  ],
  Contact: [
    {
      icon: Email,
      title: 'Email me',
      url: 'mailto:ericheinmiller@gmail.com',
    },
    {
      icon: Phone,
      title: '408-660-9990',
    },
  ],
  Apps: [
    {
      icon: Windows,
      title: 'The Wall',
      url: 'http://localhost:8080',
    },
  ],
  Iterm: [
    {
      icon: Windows,
      title: 'Mini posts',
      url: 'http://localhost:8080',
    },
  ],
};
