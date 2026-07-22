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


      <UploadBox
        title="Upload Resume"
      />


      <UploadBox
        title="Upload Job Description"
      />


      <button>
        Analyze
      </button>


    </main>
  );
}
