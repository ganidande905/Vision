<template>
    <section class="education-container">
      <h2 class="title">My Education Journey</h2>
      <div class="timeline">
        <div v-for="(item, index) in educationData" :key="index" class="timeline-item">
          
          <!-- Parent Timeline Node -->
          <div class="timeline-node"></div>
  
          <!-- Parent Timeline Content -->
          <div class="timeline-content">
            <h3 class="degree">{{ item.degree }}</h3>
            <p class="university">{{ item.university }} {{ item.year }}</p>
            <p class="description">{{ item.description }}</p>
  
            <!-- Nested (Sub) Timeline -->
            <div class="sub-timeline">
              <div v-for="(subItem, subIndex) in item.details" :key="subIndex" class="sub-item">
                
                <!-- Sub Timeline Node -->
                <div class="sub-node"></div>
  
                <!-- Sub Timeline Content -->
                <div class="sub-content">
                  <h4 class="sub-title">{{ subItem.title }}</h4>
                  <p class="sub-description">{{ subItem.description }}</p>
                </div>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  import { education } from "@/models/educationModel.js";
  
  export default {
    data() {
      return {
        educationData: education
      };
    }
  };
  </script>
  
  <style scoped>
  /* Container */
  .education-container {
    max-width: 900px;
    margin: auto;
   
    background-color: none !important;

  }
  
  .title {
    text-align: center;
    font-size: 24px;
    font-weight: bold;
 
    color: #333;
  }
  
  /* Parent Timeline */
  .timeline {
    position: relative;
    border-left: 3px solid #88898a;
  }
  
  /* Parent Timeline Nodes */
  .timeline-node {
    width: 14px;
    height: 14px;
    background-color: #0b0b0b;
    border-radius: 50%;
    position: absolute;
    left: -8px;
  }
  
  /* Parent Timeline Content */
  .timeline-item {
    position: relative;
  }
  
  .timeline-content {
    padding-left: 20px;
    background: none !important;
  }
  
  .degree {
    font-size: 20px;
    font-weight: bold;
    color: #222;
  }
  
  .university {
    font-size: 16px;
    font-weight: 500;
    color: #232323;
  }
  
  .description {
    font-family: 'Times New Roman', Times, serif;
    font-size: 15px;
    color: #000000;
    /* margin-top: 5px; */
  }
  
  /* === SUB TIMELINE === */
  .sub-timeline {
    border-left: 2px solid #888;
  }
  
  /* Sub Timeline Nodes */
  .sub-node {
    width: 10px;
    height: 10px;
    background-color: #888;
    border-radius: 50%;
    position: absolute;
    left: -5px;
  }
  
  /* Sub Timeline Items */
  .sub-item {
    position: relative;
    margin-bottom: 15px;
  }
  
  .sub-content {
    background: none !important;
    padding-left: 10px;

  }
  
  .sub-title {
    font-size: 16px;
    font-weight: bold;
    color: #333;
  }
  
  .sub-description {
    font-family: 'Times New Roman', Times, serif;
    font-size: 18px;
    color: #303030;
  }
  </style>