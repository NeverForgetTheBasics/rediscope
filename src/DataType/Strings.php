<?php

namespace NeverForgetTheBasics\Rediscope\DataType;

class Strings extends DataType
{
    /**
     * {@inheritdoc}
     */
    public function fetch(string $key)
    {
        $data = $this->getConnection()->get($key);

        return @unserialize($data) !== false ? unserialize($data) : $data;
    }

    /**
     * {@inheritdoc}
     */
    public function update(array $params)
    {
        $this->store($params);
    }

    /**
     * {@inheritdoc}
     */
    public function store(array $params)
    {
        $key = array_get($params, 'key');
        $value = array_get($params, 'value');
        $seconds = array_get($params, 'seconds');

        $this->getConnection()->set($key, $value);

        if ($seconds > 0) {
            $this->getConnection()->expire($key, $seconds);
        }
    }
}
