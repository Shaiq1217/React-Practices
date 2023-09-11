import InfoCard from "../commons/card/card";
import { Box } from "@mui/material";
import DisplayDriver from "../commons/driver/displaydriver";
import styles from "./applications.module.css";
import { useState } from "react";
import { Application } from "../../types/application";

const Applications = () => {
  const [data, setData] = useState<Application[]>([
    {
      id: 1,
      name: "ETS",
      description: "this is an application",
      isActive: true,
    },
    {
      id: 3,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
    {
      id: 4,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
    {
      id: 5,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
    {
      id: 6,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
    {
      id: 7,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
    {
      id: 8,
      name: "LMS",
      description: "this is an application",
      isActive: false,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedCardId, setEditedCardId] = useState(null);
  const [searchText, setSearchText] = useState("");

  const renderComponent = () => (
    <div className={styles.scrollControl}>
      <div className={styles.cardContainer}>
        <InfoCard
          data={data}
          setData={setData}
          code={"App#123"}
          setEditedCardId={setEditedCardId}
          setIsModalOpen={setIsModalOpen}
        />
      </div>
    </div>
  );
  return (
    <>
      <Box>
        <DisplayDriver
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          searchText={searchText}
          setSearchText={setSearchText}
          data={data}
          setData={setData}
          editedCardId={editedCardId}
          setEditedCardId={setEditedCardId}
          renderComponent={renderComponent}
          modalTitle={"Edit Application"}
          toolBarTitle={"Applications"}
        />
      </Box>
    </>
  );
};

export default Applications;
