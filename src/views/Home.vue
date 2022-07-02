<template>
  <div>
    <button @click="router.push('/test')">To Test</button>
    <button v-if="!status" @click="login">Login</button>
    <button v-else @click="logout">Logout</button>

    {{ status }}
    {{ address }}
  </div>
</template>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

<script lang="ts">
import { ref, defineComponent, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { GetAddress } from "@/library/MetaMask";

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const status = computed(() => {
      return store.getters["User/GetStatus"];
    });
    const address = computed(() => {
      return store.getters["User/GetAddress"];
    });

    const login = async () => {
      const res = await GetAddress()
      if (res.status != 200) alert(res.message)
      else {
        store.dispatch('User/SetStatus', true)
        store.dispatch('User/SetAddress', res.message)
      }
    };

    const logout = () => {
      store.dispatch('User/SetStatus', false)
      store.dispatch('User/SetAddress', '')
    }

    return { login, logout, router, status, address };
  },
});
</script>

