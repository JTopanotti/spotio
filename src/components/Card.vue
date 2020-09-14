<template>
  <article class="card" >
    <div class="image">
      <img :src="image" alt="n/a" v-on:load="isLoaded()" v-bind:class="{ active: isActive }">
    </div>
    <div class="description">
      <h4>{{name}}</h4>
      <p>{{description}}</p>
    </div>
  </article>
</template>

<script>
export default {
  props: ['name', 'description', 'image'],
  data () {
    return {
      isActive: false
    };
  },
  methods: {
    isLoaded() {
      this.isActive = true;
    }
  }
};
</script>

<style lang="scss">
  .card {
    // background-color: $secondary;
    background-color: #2B2A34;
    font-size: 12px;
    width: 160px;
    height: 230px;
    border-radius: 4px;
    text-decoration: none;
    counter-increment: rank;
    position: relative;
    box-shadow: 0 1px 5px rgba(0,0,0,0.2);
    overflow: hidden;
    animation: mouseOut 0.3s ease-in;

    &:hover {
      animation: mouseOver 0.3s ease-in forwards;
    }

  }

  .image {
      position: relative;
      width: 100%;
      &:after {
          // This forces the image container to be a square
          content: '';
          display: block;
          padding-bottom: 100%;
      }
      &:before {
          content: '•••';
          font-size: 24px;
          position: absolute;
          display: flex;
          width: 100%;
          height: 100%;
          align-items: center;
          justify-content: center;
          color: rgba(white, 0.1);
          z-index: 0;
      }
      img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 10;
          opacity: 0;
          &.active {
              animation: imageFadeIn 0.5s ease-in forwards;
              animation-delay: 0.5s;
          }
      }
  }

  .description {
      padding-bottom: 10px;
      h4 {
          padding: 10px 10px 5px;
      }
      p {
          color: #666;
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 700;
          margin-bottom: 0;
          padding-left: 10px;
          &:before {
              content: '';
              display: block;
              width: 25px;
              height: 2px;
              margin-bottom: 4px;
              background: $background;
          }
      }
  }

  .card-enter {
    opacity: 0;
  }

  .card-enter-to {
      opacity: 1;
  }

  .card-enter-active {
      transition: opacity 0.3s ease-in;
  }
</style>
