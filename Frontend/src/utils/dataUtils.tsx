// dataUtils.js
export interface data {
  id: number;
  name: string;
  description: string;
  isActive: boolean;
}

export const handleEdit = (
  id: number,
  setEditedCardId: React.Dispatch<React.SetStateAction<null>>,
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  console.log(`Edit action for card with ID ${id}`);
  setEditedCardId(id);
  setIsModalOpen(true);
};

export const handleDelete = (
  id: number,
  data: data[],
  setData: React.Dispatch<React.SetStateAction<data[]>>
) => {
  console.log(`Delete action for card with ID ${id}`);
  const filteredData = data.filter((ele: data) => ele.id !== id);
  setData(filteredData);
};

export const handleToggleActive = (
  id: number,
  data: data[],
  setData: React.Dispatch<React.SetStateAction<data[]>>
) => {
  const updatedData = data.map((ele: data) =>
    ele.id === id ? { ...ele, isActive: !ele.isActive } : ele
  );
  setData(updatedData);
};

export const handleCloseModal = (
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  setEditedCardId: React.Dispatch<React.SetStateAction<null>>
) => {
  setIsModalOpen(false);
  setEditedCardId(null);
};

export const handleSearch = (
  searchText: string,
  data: data[],
  setData: React.Dispatch<React.SetStateAction<data[]>>
) => {
  console.log('hi');
  console.log('search Test', searchText);
  const filteredData = data.filter((ele) =>
    ele.name.toLowerCase().includes(searchText.toLowerCase())
  );
  setData(filteredData);
};
