import { useState } from "react";
import { Box } from "@mui/material";
import GridComponent from "../commons/grid";
import DisplayDriver from "../commons/driver/displaydriver";
import styles from "./Events.module.css";
const Events = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 2,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 3,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 4,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 5,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 6,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 7,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 8,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 9,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 10,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
    {
      id: 11,
      name: "event-name-1",
      description: "description",
      isActive: true,
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedCardId, setEditedCardId] = useState(null);
  const [searchText, setSearchText] = useState("");
  const renderComponent = () => (
    <Box>
      <GridComponent
        data={data}
        setData={setData}
        setEditedCardId={setEditedCardId}
        setIsModalOpen={setIsModalOpen}
      />
    </Box>
  );

  return (
    <>
      <div className={styles.heightControl}>
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
          modalTitle={"Edit Events"}
          toolBarTitle={"Events"}
        />
      </div>
    </>
  );
};

export default Events;
