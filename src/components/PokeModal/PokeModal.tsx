import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { ICards } from "src/interfaces/ICardsDTO";
import Button from "@mui/material/Button";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  height: 500,
  bgcolor: "background.paper",
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

interface IPokeModal {
  open: boolean;
  handleClose: () => void;
  pokemon: ICards;
}

const PokeModal: React.FC<IPokeModal> = ({ handleClose, open, pokemon }) => {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {pokemon.attacks.map((item, index) => (
            <Box key={index}>
              <Typography gutterBottom variant="h4" component="div">
                Attack: {item.name} - Dano: {item.damage} - Custo:{" "}
                {item.convertedEnergyCost}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {item.text}
              </Typography>
            </Box>
          ))}
          <Button
            variant="contained"
            data-testid="details-button"
            onClick={handleClose}
          >
            Fechar
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default PokeModal;
