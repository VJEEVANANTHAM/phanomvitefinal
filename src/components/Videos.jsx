import React, { useState } from 'react';
import Obama from "../assets/videos/Obama.mp4";
import brucelee from "../assets/videos/bruce lee.mp4";
import gate from "../assets/videos/Bill Gates.mp4";
import apj from "../assets/videos/A. P. J. Abdul Kalam.mp4";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const Videos = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    {
      video: Obama,
      width: 241.15333557128906,
      height: 350.3450012207031,
    },
    {
      video: brucelee,
      width: 276.1282043457031,
      height: 424.3773498535156,
    },
    {
      video: apj,

      width: 276.1282043457031,
      height: 424.3773498535156,
    },
    {
      video: gate,
      width: 241.15333557128906,
      height: 350.3450012207031,
    },
  ];

  const StyledCard = styled(Card)(({ width, height }) => ({
    width: width,
    height: height,
    borderRadius: '14.71px',
  }));

  return (
    <div className="bg-[#616dd6] w-full py-8 px-12 text-white flex flex-col gap-10">
      <p className="text-center text-3xl font-semibold">
        Real stories, Real impact:Our users share their experience
      </p>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '23.72px',
        }}
      >
        {cards.map((card, index) => (
          <StyledCard key={index} width={card.width} height={card.height}>
            <CardActionArea
              onClick={() => setSelectedCard(index)}
              data-active={selectedCard === index ? '' : undefined}
              sx={{
                height: '100%',
                '&[data-active]': {
                  backgroundColor: 'action.selected',
                  '&:hover': {
                    backgroundColor: 'action.selectedHover',
                  },
                },
              }}
            >
              <CardContent sx={{ height: '100%', padding: 0 }}>
                <video
                  src={card.video}
                  controls
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Changed objectFit to cover
                />
              </CardContent>
            </CardActionArea>
          </StyledCard>
        ))}
      </Box>
    </div>
  );
};

export default Videos;