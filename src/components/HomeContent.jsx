"use client";
import { mutateRole } from "@/app/actions";

const HomeContent = () => {
  return (
    <>
      {user && <div>Show me if user is present</div>}

      <button onClick={() => mutateRole(session.data.id)}>
        get my details
      </button>
    </>
  );
};

export default HomeContent;
