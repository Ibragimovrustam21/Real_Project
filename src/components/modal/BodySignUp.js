import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';

const steps = ['Identifikatsiya', 'Tasdiqlash'];
export default function BodySignUp() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '35px' }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        </>
      ) : (
        <>
        {/* <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography> */}
          <div className='input_item input_name'>
            <p>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99967 13.6668C3.31767 13.6668 0.333008 10.6822 0.333008 7.00016C0.333008 3.31816 3.31767 0.333496 6.99967 0.333496C10.6817 0.333496 13.6663 3.31816 13.6663 7.00016C13.6663 10.6822 10.6817 13.6668 6.99967 13.6668ZM6.99967 12.3335C8.41416 12.3335 9.77072 11.7716 10.7709 10.7714C11.7711 9.77121 12.333 8.41465 12.333 7.00016C12.333 5.58567 11.7711 4.22912 10.7709 3.22893C9.77072 2.22873 8.41416 1.66683 6.99967 1.66683C5.58519 1.66683 4.22863 2.22873 3.22844 3.22893C2.22824 4.22912 1.66634 5.58567 1.66634 7.00016C1.66634 8.41465 2.22824 9.77121 3.22844 10.7714C4.22863 11.7716 5.58519 12.3335 6.99967 12.3335ZM6.33301 9.00016H7.66634V10.3335H6.33301V9.00016ZM6.33301 3.66683H7.66634V7.66683H6.33301V3.66683Z" fill="#116189" />
              </svg>
              Diqqat! Sertifikat tekshirishda muammo bo’lmasligi uchun FIOni to’gri kiriting.
            </p>
            <input type='text' placeholder='FIO *' />
          </div>
          <div className='input_item'>
            <input type='text' placeholder='Passport seriya va raqami *' />
          </div>
          <div className='input_item'>
            <input type='email' placeholder='Elektron pochta manzili *' />
          </div>
          <div className='input-select'>
            <div className='input_work'>
              <select>
                <option>Viloyat *</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
              </select>
            </div>
            <div className='input_work'>
              <select>
                <option>Tuman *</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
                <option>Toshkent</option>
              </select>
            </div>
          </div>
          <div className='input_work'>
            <select>
              <option>Ish joyi *</option>
              <option>Toshkent</option>
              <option>Toshkent</option>
              <option>Toshkent</option>
              <option>Toshkent</option>
            </select>
          </div>
          {/* <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </Button>
          </Box> */}
          <button className='modal_btn' onClick={handleNext}>
            Keyingisi
          </button>
        </>
      )}
    </Box>
  );
}
