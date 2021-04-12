<template lang="pug">
  Modal(type="filter")
    portal-target(name="filter-modal")
</template>

<script>
import Modal from "@/components/Modal";

export default {
  components: {
    Modal,
  },
};
</script>
