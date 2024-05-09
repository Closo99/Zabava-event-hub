'use client'
import {useRouter } from 'next/navigation'
import './venues.css' 
import Image from 'next/image';
import Footer from '../components/Footer';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PrimaryAppBar from '../components/AppBar';

export default function Venues() {

  const router = useRouter()

  return (
    <div>
        <PrimaryAppBar></PrimaryAppBar>
        <Footer></Footer>
    </div>
  );
}
