import UploadBox from "../components/UploadBox";


export default function Home() {

  return (
    <main>

      <h1>
        Offer Copilot
      </h1>


      <p>
        AI Career Assistant
      </p>


      <h2>
        Upload Resume
      </h2>

      <UploadBox />


      <h2>
        Upload Job Description
      </h2>

      <UploadBox />


      <button>
        Analyze
      </button>


    </main>
  );
}
