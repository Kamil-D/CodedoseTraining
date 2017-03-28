package org.codedose.repository;

import org.codedose.model.Talk;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by Kamil on 2017-03-28.
 */
public interface TalkRepository extends JpaRepository<Talk, String> {



}
